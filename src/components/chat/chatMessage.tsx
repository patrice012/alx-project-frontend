function UserMessage() {
  return (
    <>
      <div className="w-full relative">
        <div className="bg-teal-500 p-3 rounded-[16px] rounded-tl-[0px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            enim, aliquam corporis omnis odio voluptates mollitia soluta
            consequatur iure porro blanditiis eum!
          </p>
        </div>
      </div>
    </>
  );
}

function ContactMessage() {
  return (
    <>
      <div className="w-full">
        <div className="bg-gray-700 p-3 rounded-[16px] rounded-tr-[0px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            enim, aliquam corporis omnis odio voluptates mollitia soluta
            consequatur iure porro blanditiis eum!
          </p>
        </div>
      </div>
    </>
  );
}

export function ChatMessage() {
  return (
    <>
      <div className="space-y-6">
        <UserMessage />
        <ContactMessage />
      </div>
    </>
  );
}
