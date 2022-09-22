const TourModel = require('../model/Tour');

//Data Save from Database
exports.saveTour = async(req, res, next) => {
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
};

//get all tour data
exports.getTour = async(req, res, next) => {
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
};

//getData by Find specific fields From Database
exports.getTourBySpecificFields = async(req, res, next) => {
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
};

//getData Find by id From Database
exports.getTourById = async(req, res, next) => {
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
};

//update product by using id
exports.updateTourById = async(req, res, next) => {
  try{
    const id = req.params.id;
    const Tour = await TourModel.updateOne({ _id: id }, { $set: req.body }, {
      runValidators: true,
    });
    res.status(200).json({
      status: 'successful',
      massage: 'Data Updated successful!',
      data: Tour,
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Updated UnSuccessful!',
      error: error.massage
    });
  }
};

//delete a tour data from Database
exports.deleteTourById = async(req, res, next) => {
  try{
    const id = req.params.id;
    const Tour = await TourModel.deleteOne({ _id: id });
    res.status(200).json({
      status: 'successful',
      massage: 'Data Delete successful!',
      data: Tour,
    });
  }catch(error){
    res.status(400).json({
      status: 'failed',
      massage: 'Data Deleted UnSuccessful!',
      error: error.massage
    });
  }
}