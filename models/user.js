const { database } = require("../config/connection");
const { ObjectId } = require("mongodb");

class User {
  static user() {
    const db = database();
    return db.collection("users");
  }

  static addUser(payload) {
    return this.user().insertOne(payload);
  }

  static findAllUser() {
    return this.user().find().toArray();
  }

  static findById(id) {
    return this.user().findOne({ _id: ObjectId(id) });
  }
  static updateUser(id, payload) {
    return this.user().updateOne({ _id: ObjectId(id) }, { $set: payload });
  }

  static deleteUser(id) {
    return this.user().findOneAndDelete({ _id: ObjectId(id) });
  }
}

module.exports = User;
