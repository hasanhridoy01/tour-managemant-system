const mongoose = require("mongoose");

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
const TourModel = mongoose.model('Tour', TourSchema);

module.exports = TourModel;