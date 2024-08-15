const express = require("express");
const cors = require("cors");
const router = require("./src/routes/user.routes");
const app = express();
const { ConnectDB } = require("./src/db/db");

ConnectDB();

app.use(
  cors({
    origin: ["https://crud-app-psi-lime.vercel.app"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", router);

module.exports = app;
