const mongo = require("mongodb");
require("dotenv").config();

class Chat {
  constructor() {}
  get_message(uid, callback) {
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
          .find({ from: "pradeep" })
          .toArray()
          .then((res) => {
            console.log(res);
          });
        //console.log(collection);
      }
    );
  }
}

module.exports = { Chat };
