import { toast as toastFunction } from "sonner";

function debounce_leading(timeout = 2000) {
  let timer: NodeJS.Timeout | undefined;
  return function () {
    return new Promise<typeof toastFunction>((resolve) => {
      if (!timer) {
        resolve(toastFunction);
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
      }, timeout);
    });
  };
}

export const notificationAlert = debounce_leading();
