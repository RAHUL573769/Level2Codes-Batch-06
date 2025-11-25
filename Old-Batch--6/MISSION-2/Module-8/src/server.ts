import app from "./app";
import confiq from "./app/confiq";
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;
async function server() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myapp");
    app.listen(confiq.port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log(process.cwd());
  } catch (error) {}
}

server();
