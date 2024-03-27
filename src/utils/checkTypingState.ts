function debounce(timeout = 900) {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(true);
      }, timeout);
    });
  };
}

export const checkTypingState = debounce();
