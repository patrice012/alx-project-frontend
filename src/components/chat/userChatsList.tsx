import { Badge } from "../ui/badge";
import { ChatPreview } from "./chatPreview";
import { socket } from "@/utils/socket";
import { useState } from "react";
import { notificationAlert } from "@/utils/notif";
import { ChatPreviewSkeleton } from "../skeleton/chatPreviewLoading";

export function UserChatList() {
  const [discussionList, setDiscussionList] = useState([] as any);
  const [request, setRequest] = useState({ isLoading: true, newError: "" });

  const { isLoading, newError } = request;

  function resetLoader(timer = 1500) {
    setTimeout(() => {
      setRequest((prev) => ({ ...prev, isLoading: false }));
    }, timer);
  }

  socket.on("newDiscussion", (data) => {
    const { newDiscussion, error, message } = data;

    if (!error) {
      setDiscussionList((prev: any) => {
        const disc = newDiscussion;
        const discId = disc._id;

        if (prev.length === 0) {
          return [disc];
        }

        const idx = prev.findIndex((d: any) => d._id === discId);
        if (idx === -1) {
          return [disc, ...prev];
        } else {
          return prev.map((d: any) => {
            if (d._id === discId) {
              return disc;
            }
            return d;
          });
        }
      });
      resetLoader();
    } else {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
      setRequest((prev) => ({ ...prev, newError: error }));
    }
  });

  socket.on("discussionList", (data) => {
    const { discussionList, error, message } = data;
    if (!error) {
      setDiscussionList(discussionList);
      resetLoader();
    } else {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
      setRequest((prev) => ({ ...prev, newError: error }));
    }
  });

  socket.on("newMessage", (data) => {
    const { error, message, newMessage } = data;
    if (!error) {
      const discId = newMessage.discussionId;
      socket.emit("newDiscussion", { discussionId: discId });
    } else {
      notificationAlert().then((toast) => {
        toast(`${message || "Something went wrong!"}`, {
          description: `${error || "Please try again later"}`,
        });
      });
    }
  });

  return (
    <div className="flex flex-col justify-start gap-5 h-full w-full">
      <div className="flex items-center justify-start gap-2 text-[16px]">
        <h3>Messages</h3>
        {discussionList && !isLoading ? (
          <Badge className="dark:bg-teal-500 dark:text-white bg-teal-500 text-white">
            {discussionList?.length}
          </Badge>
        ) : null}
      </div>
      <div>
        <div className="flex flex-col items-center gap-4 max-h-[450px] overflow-y-scroll overflow-x-hidden scrollbar scroll-ml-5 scrollbar-thumb-[#313235] scrollbar-w-[4px] scrollbar-h-full scrollbar-thumb-rounded-full">
          {isLoading ? (
            <>
              <ChatPreviewSkeleton />
              <ChatPreviewSkeleton />
              <ChatPreviewSkeleton />
              <ChatPreviewSkeleton />
              <ChatPreviewSkeleton />
            </>
          ) : discussionList && !isLoading ? (
            discussionList?.map((discussion: any, idx: any) => {
              return <ChatPreview key={idx} discussion={discussion} />;
            })
          ) : newError ? (
            <p>Error: {newError}</p>
          ) : (
            <p>Nothing to find here</p>
          )}
        </div>
      </div>
    </div>
  );
}
