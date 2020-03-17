const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
const socket = require("socket.io");

var { Chat } = require("./chat function/chat");

app.post("/get_messages", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  var Chat1 = new Chat();
  Chat1.get_new_message("pradeep", (response) => {
    res.send(response);
  });
});

app.post("/get_message_user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  var Chat1 = new Chat();
  Chat1.get_message_user("pradeep", (response) => {
    res.send(response);
  });
});
const server = app.listen(8000);

const io = socket(server);

io.on("connection", (socket) => {
  io.on("message", (message) => {
    console.log(message);
  });
});
