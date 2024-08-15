const app = require("./app");
const { ConnectDB } = require("./src/db/db");

ConnectDB();

module.exports = app;
