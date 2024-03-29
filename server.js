const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const { Data } = require("./data.model.js");
// app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
(async () => {
  try {
    mongoose
      .connect(process.env.DB_URI)
      .then((data) =>
        console.log(
          `Database connect successfully with ${data.connection.host}`
        )
      );
  } catch (error) {
    console.log(error);
  }
})();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Server is on!",
  });
});

app.post("/savebankingdata", async (req, res) => {
  console.log(req.body);
  try {
    const data = await Data.create(req.body);
    res.status(200).json({
      success: true,
      message: "Data Saved Successfully!",
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error!",
      err,
    });
  }
});

app.listen(4000, (err) => {
  if (!err) console.log(`Server is listening on port 4000`);
});
