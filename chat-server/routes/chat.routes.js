const express = require("express");
const app = express();
var ChatRouter = express.Router();
const bodyParser = require("body-parser");

var { Chat } = require("./chat_function/chat");
var verifyUser = require("../functions/verifyuser");

ChatRouter.route("/get_messages").post(verifyUser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  //console.log(req.body);
  Chat1.get_new_message(req.body.uid, (response) => {
    res.status(response.status).send(response);
  });
});

ChatRouter.route("/delete_message").delete(verifyUser, (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  var Chat1 = new Chat();
  Chat1.chat_delete_message(req.body.id, (response) => {
    res.status(response.status).send(response);
  });
});

module.exports = ChatRouter;
