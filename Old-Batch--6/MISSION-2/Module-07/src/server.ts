import app from "./app";
const port = 3000;

function server() {
  app.listen(port, () => {
    console.log(`Example is running on ${port}`);
  });
}

server();
