import mongoose from "mongoose";
import app from "./app";
// import config from "./config";

require("dotenv").config();

// const port = 5000;

async function server() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/murirTin");
    app.listen(5000, () => {
      console.log("DB Connected");
    });
  } catch (error) {
    console.log(error);
  }
}

server()
