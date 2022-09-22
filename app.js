const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//Tour Route
const tourRoute = require('./route/tour.route');

//Data Save from Database //Data Find From Database
app.use('/api/v1/tour', tourRoute);

//getData by Find specific fields From Database
app.use('/app/v1/tour', tourRoute);

//getData Find by id From Database
app.use('/app/v1/tour/:id', tourRoute);

//Test Routes
app.get("/", (rep, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;