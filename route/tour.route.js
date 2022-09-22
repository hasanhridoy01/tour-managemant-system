const express = require("express");
const router = express.Router();
const tourController = require('../controller/tour.controller');

router.route('/')
.get(tourController.getTour())
.get(tourController.getTourBySpecificFields())
.post(tourController.saveTour())

router.route('/:id')
.get(tourController.getTourById())
.patch(tourController.updateTourById())
.delete(tourController.deleteTourById())

module.exports = router;