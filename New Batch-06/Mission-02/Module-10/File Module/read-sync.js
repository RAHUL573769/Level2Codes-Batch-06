const fs = require("fs");
console.log("Start Reading");

try {
  const data = fs.readFileSync("diary.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.error(error.message);
}
console.log("Finished");
