//Accessing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var router = express.Router();
var socket = require("socket.io");
require("dotenv").config();
const webpush = require("web-push");

//Accesing files
var AuthRouter = require("./routes/auth.routes");
var ChatRouter = require("./routes/chat.routes");
var verifyUser = require("./functions/verifyuser");
var { Chat } = require("./routes/chat_function/chat");
var Auth = require("./routes/auth_function/auth");

//middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "../chat-client/build")));

app.use("/api", router);
router.use("/chat", ChatRouter);
router.use("/auth", AuthRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../chat-client/build"));
});

webpush.setVapidDetails(
  "mailto:test@test.com",
  "BHzautfuAhAjFSZz20G7SHZa3K_-T2jsy8F5IDdk0vMVn3UNFxtmqRrh5ABeajp2L5X72Im6SAoeXbmHnSwxJCY",
  "boaWMFFbN0aZr7sPwL_qXINoGDTnO7UfjHIzZAUjhcg"
);

app.post("/subscribe", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const subscription = req.body;

  webpush.sendNotification(subscription, "hello");
});

const server = app.listen(process.env.PORT || 8000);

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    var Chat1 = new Chat();
    var Auth1 = new Auth();
    Auth1.getUID(data.to, (res) => {
      socket.broadcast.emit(res, data);
      Chat1.send_message(
        {
          from_uid: data.uid_from,
          from: data.from,
          to: data.to,
          message: data.message,
          type: data.type,
          time: data.time,
        },
        () => {
          null;
        }
      );
    });
  });
});
