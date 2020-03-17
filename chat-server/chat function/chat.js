const mongo = require("mongodb");
require("dotenv").config();

class Chat {
  constructor() {}
  get_new_message(uid, callback) {
    mongo.MongoClient.connect(
      "mongodb+srv://admin:admin78@cluster0-h9gpw.mongodb.net/test?retryWrites=true&w=majority",
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) {
          callback(err);
        }
        var dbo = db.db("chat");
        dbo
          .collection("messages")
          .aggregate(
            {
              $match: { to: "pradeep" }
            },
            {
              $group: {
                from: "fatfox",
                total: { $sum: 1 }
              }
            }
          )
          .toArray()
          .then((res) => {
            callback(res);
          });
        //console.log(collection);
      }
    );
  }

  get_message_user(uid, callback) {
    mongo.MongoClient.connect(
      "mongodb+srv://admin:admin78@cluster0-h9gpw.mongodb.net/test?retryWrites=true&w=majority",
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
              $match: { to: "pradeep" }
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
