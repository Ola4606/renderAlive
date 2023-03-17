const express = require("express");
const baseRouter = require("./routers/base.router");
const app = express();

app.use(express.json());

//routers
app.use(baseRouter);

module.exports = app;
