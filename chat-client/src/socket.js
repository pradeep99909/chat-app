import io from "socket.io-client";

//const socket = io("http://localhost:8000");
const socket = io("/");
export default socket;
