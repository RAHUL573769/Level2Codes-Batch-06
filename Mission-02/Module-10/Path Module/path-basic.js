const path = require("path");

console.log("Current Path Info");
console.log("File Name", __filename);
console.log("Dir Name", __dirname);
console.log("\n" + "-".repeat(50), +"\n");

const filePath = "/rahul/documents/next-level.pdf";
console.log("Anayzing File Path", filePath);
console.log("Directory", path.dirname(filePath));
console.log("Base Name", path.basename(filePath));
console.log("Extension Name", path.extname(filePath));
console.log("\n" + "-".repeat(50), +"\n");
const parsed = path.parse(filePath);
console.log("Parsed", parsed);
console.log("Format Parsed", path.format(parsed));
