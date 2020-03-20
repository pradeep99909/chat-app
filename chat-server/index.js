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

var Auth = require("./auth_function/auth");
var { Chat } = require("./chat function/chat");

app.post("/get_messages", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  //console.log(req.body.uid);
  Chat1.get_new_message(req.body.uid, (response) => {
    res.send(response);
  });
});

app.post("/chat_history", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  Chat1.chat_history({ uid: req.body.uid, to: req.body.to }, (response) => {
    res.send(response);
  });
});

app.post("/auth_register", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Auth1 = new Auth();
  //console.log(req.body);
  Auth1.createNewUser(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },
    (response) => {
      res.send(response);
    }
  );
});
app.post("/auth_login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Auth1 = new Auth();
  Auth1.login(
    {
      email: req.body.email,
      password: req.body.password
    },
    (response) => {
      res.status(response.status).send(response);
    }
  );
});

app.post("/send_message", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  Chat1.send_message(
    {
      from_uid: req.body.uid_from,
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
