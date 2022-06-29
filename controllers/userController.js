const User = require("../models/user");
const { hashPassword } = require("../helpers/bcrypt");

const register = async (req, res, next) => {
  try {
    let { email, password, username } = req.body; // get data from body

    // add user to mongodb database
    let addUser = await User.addUser({
      email,
      password: await hashPassword(password),
      username,
      balance: 0,
    });

    console.log(addUser, "data user yang berhasil dibuat");

    res.status(201).json({ success: true, message: "User has been created" }); //send response if success
  } catch (err) {
    console.log(err);
    res.status(500).json({
      // send response if error
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

module.exports = {
  register,
};
