//Accessing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var router = express.Router();
var socket = require("socket.io");
require("dotenv").config();
const webpush = require("web-push");
const PushNotifications = require('@pusher/push-notifications-server');

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

const beamsClient = new PushNotifications({
  instanceId: '8c176289-0a31-44fc-95d2-ee4935638c42',
  secretKey: '7DB73C5AFD2EE5883000C740998C8C4EFDB4237BD857FB7C01CCF50F5E624119'
});

app.get('/pusher/beams-auth', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // Do your normal auth checks here 🔒
  const userId = '2802a8a9-faf5-43f2-ab15-a27e932af18d' // get it from your auth system
  const userIDInQueryParam = req.query['user_id'];
  if (userId != userIDInQueryParam) {
    res.status(401).send('Inconsistent request');
  } else {
    const beamsToken = beamsClient.generateToken(userId);
    res.send(JSON.stringify(beamsToken));
  }
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
          const Auth1 = new Auth()
          Auth1.getUID(data.to,(uid)=>{
            console.log(data)
            beamsClient.publishToUsers(['2802a8a9-faf5-43f2-ab15-a27e932af18d'], {
              web: {
                notification: {
                  title: "Message from "+data.from,
                  body: data.message
                }
              }
            }).then((publishResponse) => {
              //code to update the message is sent
              console.log('Just published:', publishResponse.publishId);
            }).catch((error) => {
              console.error('Error:', error);
            });
          })
        }
      );
    });
  });
});
