require("dotenv").config();
// console.log(process.env);
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;
const { connect } = require("./config/connection");
const router = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server running for Midtrans Payment Backend");
});

app.use(router);

connect()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
