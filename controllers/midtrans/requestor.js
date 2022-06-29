"use strict";

const axios = require("axios");

class Requestor {
  static get(url, data, server_key) {
    return this.remoteCall(url, data, server_key, false);
  }

  static post(url, data, server_key) {
    return this.remoteCall(url, data, server_key, true);
  }

  static async remoteCall(url, data, server_key, post = true) {
    try {
      const header = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${Buffer.from(server_key)}`.toString("base64"),
      };

      let body = JSON.stringify(data);
      let result;

      if (post) {
        result = await axios.post(url, body, { headers: header });
      } else {
        result = await axios.get(url, { headers: header });
      }

      return result.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = Requestor;
