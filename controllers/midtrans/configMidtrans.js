"use strict";
const SANDBOX_URL = process.env.MIDTRANS_SANDBOX_URL;
const PRODUCTION_URL = process.env.MIDTRANS_PRODUCTION_URL;

class Config {
  static serverKey = process.env.MIDTRANS_SERVER_KEY;
  static isProduction = false;
  static is3ds = false;
  static isSanitized = false;

  static getBaseUrl() {
    return Config.isProduction ? PRODUCTION_URL : SANDBOX_URL;
  }
}

module.exports = Config;
