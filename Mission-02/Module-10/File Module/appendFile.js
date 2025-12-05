const fs = require("fs");

fs.writeFileSync("./appLog.txt", "Application Started");

console.log("File Created");
const log1Entry = `${new Date().toISOString} user logged in`;

fs.appendFileSync("./appLog.txt", log1Entry);
