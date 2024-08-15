const http = require("http");
const app = require("./app");
const { ConnectDB } = require("./src/db/db");

ConnectDB()
  .then(() => {
    http.createServer(app).listen(200, (req, res) => {
      console.log("Server started at port 200");
    });
  })
  .catch((err) => {
    console.log(err);
  });
