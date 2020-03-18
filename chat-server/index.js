const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    type: ["application/json", "text/plain"]
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

const socket = require("socket.io");

var { Chat } = require("./chat function/chat");

app.post("/get_messages", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  Chat1.get_new_message(req.body.uid, (response) => {
    res.send(response);
  });
});

app.post("/send_message", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  Chat1.send_message(
    {
      from: req.body.from,
      to: req.body.to,
      message: req.body.message,
      time: req.body.time
    },
    (response) => {
      res.send(response);
    }
  );
});

app.post("/get_message_user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  var Chat1 = new Chat();
  Chat1.get_message_user(req.body.uid, (response) => {
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
