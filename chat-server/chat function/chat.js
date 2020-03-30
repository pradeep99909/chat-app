const mongo = require("mongodb");
require("dotenv").config();

class Chat {
  constructor() {}
  get_new_message(uid, callback) {
    mongo.MongoClient.connect(
      process.env.mongoconnect,
      { useUnifiedTopology: true, useNewUrlParser: true },
      (err, db) => {
        if (err) {
          callback(err);
        }
        var dbo = db.db("chat");
        dbo
          .collection("messages")
          .aggregate([
            { $match: { to_uid: uid } },
            //{ $unwind: "$message" },
            {
              $group: { _id: "$from" }
            }
          ])
          .toArray()
          .then((res) => {
            callback({
              status: 200,
              message: res,
              success: true
            });
          })
          .catch(() => {
            callback({
              status: 400,
              message: "Network Error",
              success: false
            });
          });
      }
    );
  }

  async chat_history(data, callback) {
    mongo.MongoClient.connect(
      process.env.mongoconnect,
      { useUnifiedTopology: true, useNewUrlParser: true },
      async (err, db) => {
        if (err) {
          callback({
            status: 400,
            message: "Network Error",
            success: false
          });
        }
        var dbo = db.db("chat");
        await dbo
          .collection("messages")
          .find({
            $or: [
              { from_uid: data.uid, to: data.to },
              {
                to_uid: data.uid,
                from: data.to
              }
            ]
          })
          .toArray()
          .then((res) => {
            callback({
              status: 200,
              message: res,
              success: true
            });
          })
          .catch(() => {
            callback({
              status: 400,
              message: "Database Error",
              success: false
            });
          });
      }
    );
  }

  send_message(data, callback) {
    mongo.MongoClient.connect(
      process.env.mongoconnect,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) {
          callback(err);
        }
        var dbo = db.db("chat");
        dbo
          .collection("users")
          .findOne({ username: data.to })
          .then((user) => {
            if (user !== null) {
              dbo
                .collection("messages")
                .insertOne(
                  {
                    from_uid: data.from_uid,
                    to_uid: user.uid,
                    from: data.from,
                    to: data.to,
                    message: data.message,
                    time: data.time
                  },
                  { writeConcern: { w: "majority" } }
                )
                .then(() => {
                  callback({
                    status: 200,
                    message: "Message Sent",
                    success: true
                  });
                })
                .catch(() => {
                  callback({
                    status: 400,
                    message: "Database Error",
                    success: false
                  });
                });
            }
          })
          .catch((err) => {
            callback({
              status: 400,
              message: "Database Error",
              success: false
            });
          });
      }
    );
  }

  get_message_user(uid, callback) {
    mongo.MongoClient.connect(
      process.env.mongoconnect,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) {
          callback(err);
        }
        var dbo = db.db("chat");
        dbo
          .collection("messages")
          .aggregate([
            {
              $match: { to_uid: uid }
            },
            { $unwind: "$from" },
            {
              $group: {
                _id: "$from"
              }
            }
          ])
          .toArray()
          .then((res) => {
            callback(res);
          });
      }
    );
  }
}

module.exports = { Chat };
