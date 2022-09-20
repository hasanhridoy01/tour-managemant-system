const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//Data Items Schema Design
const TourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please a name for this product!"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at list 3 Character"],
    maxLength: [100, "Name is to large"]
  },
  amount: {
    type: String,
    required: true,
    min: [0, "price can't be negative"]
  },
  // supplier: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Supplier",
  // }
}, { timestamps: true });

//MODEL
const TourModel = mongoose.model('Tour',TourSchema);

//Data Save from Database
app.post('/api/v1/tour', (req, res, next) => {
  //model instance
  const tour = new TourModel(req.body);
  //data save from database
  tour.save();
})

//Test Routes
app.get("/", (rep, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;