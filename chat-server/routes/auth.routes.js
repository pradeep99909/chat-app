const express = require("express");
const app = express();
var AuthRouter = express.Router();

var Auth = require("./auth_function/auth");

AuthRouter.route("/register").post((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Auth1 = new Auth();
  Auth1.createNewUser(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
    (response) => {
      res.send(response);
    }
  );
});

AuthRouter.route("/login").post((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Auth1 = new Auth();
  Auth1.login(
    {
      email: req.body.email,
      password: req.body.password,
    },
    (response) => {
      res.status(response.status).send(response);
    }
  );
});

AuthRouter.route("/user_search").post((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  var Auth1 = new Auth();
  Auth1.search(req.body.user, (response) => {
    res.status(response.status).send(response);
  });
});

module.exports = AuthRouter;
