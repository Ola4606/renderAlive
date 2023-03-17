const express = require("express");
const {helloResponse} = require ("./base.controller")

const baseRouter = express.Router();

//routes
baseRouter.get('/hello', helloResponse);

module.exports = baseRouter;