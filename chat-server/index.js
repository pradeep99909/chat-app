const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const socket = require("socket.io");

var { Chat } = require("./chat function/chat");
var Chat1 = new Chat();
app.post("/get_messages", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  Chat1.get_message("pradeep", (response) => {
    console.log(response);
  });
});
const server = app.listen(8000);

const io = socket(server);

io.on("connection", (socket) => {
  io.on("message", (message) => {
    console.log(message);
  });
});
