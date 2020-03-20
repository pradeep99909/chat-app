const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
var bcrypt = require("bcryptjs");
var uid = require("uuid/v4");

class Auth {
  login(data, callback) {
    MongoClient.connect(
      "mongodb+srv://admin:admin78@cluster0-h9gpw.mongodb.net/test?retryWrites=true&w=majority",
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) {
          callback({
            message: "Database Connectivity Error",
            success: false,
            status: 500
          });
        }
        var dbo = db.db("chat");
        var collection = dbo.collection("users");
        collection.findOne({ email: data.email }).then((res) => {
          if (res !== null) {
            if (bcrypt.compareSync(data.email + data.password, res.password)) {
              callback({
                message: "User Authenticated",
                status: 200,
                success: true,
                uid: res.uid,
                from: res.username
              });
            } else {
              callback({
                message: "Wrong Password",
                status: 400,
                success: false
              });
            }
          } else {
            callback({
              message: "User does not exists",
              status: 400,
              success: false
            });
          }
        });
      }
    );
  }
  createNewUser(data, callback) {
    MongoClient.connect(
      "mongodb+srv://admin:admin78@cluster0-h9gpw.mongodb.net/test?retryWrites=true&w=majority",
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) {
          callback({
            message: "Database Connectivity Error",
            success: false,
            status: 400
          });
        }
        var dbo = db.db("chat");
        var collection = dbo.collection("users");
        var email = collection.findOne({ email: data.email }).then((res) => {
          if (res) {
            callback({
              status: 400,
              message: "Email arlready Exists",
              success: false
            });
          } else {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(data.email + data.password, salt);
            collection
              .insertOne({
                username: data.username,
                email: data.email,
                password: hash,
                uid: uid()
              })
              .then(() => {
                callback({
                  status: 200,
                  message: "User Successfully Logined",
                  success: true
                });
              })
              .catch((err) => {
                callback({
                  message: "Database Connectivity Error",
                  success: false,
                  status: 400
                });
              });
          }
        });
      }
    );
  }
}

module.exports = Auth;
