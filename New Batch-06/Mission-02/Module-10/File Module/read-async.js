const fs = require("fs");
console.log("Start Reading-1");

fs.readFile("diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("Error Happened", error.message);
  } else {
    console.log("File Content");
    console.log(data);
  }
});
