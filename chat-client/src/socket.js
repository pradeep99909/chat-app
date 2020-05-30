import io from "socket.io-client";

const socket = io("http://192.168.0.104:8000");
export default socket;
