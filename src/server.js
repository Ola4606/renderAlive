const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

function start() {
  //make 1st req to hourlySplashed

  server.listen(PORT, () => {
    console.log("Thank GOD, the server is running");
  });
}

start();
