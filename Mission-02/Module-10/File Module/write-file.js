const fs = require("fs");

const content = "This is a Content Nodejs  is Awesome";

try {
  fs.writeFileSync("diary.txt", content);
} catch (error) {
  console.error(error);
}
const content2 = "This is a Content Nodejs  is Awesome\n";
fs.writeFile("diary.txt", content2, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("File Written Asynchronously");
  }
});
