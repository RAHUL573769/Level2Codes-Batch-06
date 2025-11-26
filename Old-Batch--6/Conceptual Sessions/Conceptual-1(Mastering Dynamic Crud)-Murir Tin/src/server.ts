import mongoose from "mongoose";
import app from "./app";
import config from "./config";
require("dotenv").config();

// const port = 5000;

async function server() {
  try {
    await mongoose.connect(config.DB_LOCAL);
    app.listen(`${config.PORT} `, () => {
      console.log(`DB Connected ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
