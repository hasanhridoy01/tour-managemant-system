const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { getTour, getTourBySpecificFields, getTourById, saveTour } = require("./controller/Tour.controller");

//middleware
app.use(express.json());
app.use(cors());

//Tour Route
const tourRoute = require('./route/tour.route');

//product middleware
// TourSchema.pre('save', function(next){
//   console.log('before saving data');
//   next();
// });

// TourSchema.post('save', function(doc, next){
//   console.log('after saving data');
//   next();
// });

//Data Save from Database
app.post('/api/v1/tour', saveTour());

//Data Find From Database
app.get('/app/v1/tour', getTour());

//getData by Find specific fields From Database
app.get('/app/v1/tour', getTourBySpecificFields());

//getData Find by id From Database
app.get('/app/v1/tour/:id', getTourById());

//Test Routes
app.get("/", (rep, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;