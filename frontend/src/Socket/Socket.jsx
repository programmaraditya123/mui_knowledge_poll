// socket.js
import { io } from "socket.io-client";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const socket = io(`${BASE_URL}`, {
  transports: ["websocket"],
  withCredentials: true,
  autoConnect: true,
});

export default socket;
