const fs = require("fs");

fs.writeFileSync("temp.txt", "This is a Tempfile");

console.log("temp file created ");

if (fs.existsSync("temp.txt")) {
  console.log("File Exists");

  fs.unlinkSync("temp.txt");

  console.log("File Deleted");
}
