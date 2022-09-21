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
    type: Number,
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

//product middleware
TourSchema.pre('save', function(next){
  console.log('before saving data');
  next();
});

TourSchema.post('save', function(doc, next){
  console.log('after saving data');
  next();
});

//Data Save from Database
app.post('/api/v1/tour', async(req, res, next) => {
  try{
    //model instance
    const tour = new TourModel(req.body);
    //data save from database
    await tour.save();
    res.status(200).json({
      status: 'successful',
      massage: 'Data Inserted successful!'
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Inserted UnSuccessful!',
      error: error.massage
    });
  }
});

//Data Find From Database
app.get('/app/v1/tour', async(req, res, next) => {
  try{
    const Tour = await TourModel.find({});
    res.status(200).json({
      status: 'successful',
      massage: 'Data Inserted successful!'
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Find UnSuccessful!',
      error: error.massage
    });
  }
});

//getData by Find specific fields From Database
app.get('/app/v1/tour', async(req, res, next) => {
  try{
    const Tour = await TourModel.find({}, 'name','amount');
    res.status(200).json({
      status: 'successful',
      massage: 'Data Inserted successful!'
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Find UnSuccessful!',
      error: error.massage
    });
  }
});

//getData Find by id From Database
app.get('/app/v1/tour/:id', async(req, res, next) => {
  try{
    const id = req.params.id;
    const Tour = await TourModel.findById(id);
    res.status(200).json({
      status: 'successful',
      massage: 'Data Inserted successful!',
      data: Tour,
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Find UnSuccessful!',
      error: error.massage
    });
  }
});

//Test Routes
app.get("/", (rep, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;