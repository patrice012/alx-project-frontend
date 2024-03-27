import { io } from "socket.io-client";


console.log(window.document.cookie);

const accessToken = window.document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("accessToken="));
const accessTokenValue = accessToken?.split("=")[1];

// "undefined" means the URL will be computed from the `window.location` object
const URL: string =
  import.meta.env.VITE_PUBLIC_NODE_ENV === "production"
    ? undefined
    : "http://localhost:4000";

export const socket = io(URL, {
  extraHeaders: {
    authorization: `bearer ${accessTokenValue}`,
  },
  reconnection: true,
  reconnectionAttempts: 3,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});
