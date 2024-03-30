import { io } from "socket.io-client";

const accessToken = window.sessionStorage.getItem("token");
const accessTokenValue =
  accessToken && accessToken !== "undefined" ? JSON.parse(accessToken) : "";

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
