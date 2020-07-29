const express = require("express");
const { parkCar, unparkCar, parkingStatus } = require("../controller/parking");
const {checkParkingSpot} = require('../controller/middlewares')
const router = express.Router();

// @desc Show Home
// @route GET /parker
router.get("/", (req, res) => {
  res.send(`<code>Your IP is: '${req.ip}'</code>`);
});

// @desc Request to park car with the car number
// @route POST /parker/park
router.post("/park", parkCar);

// @desc Request to park car with the car number
// @route POST /parker/unpark
router.post("/unpark", checkParkingSpot, unparkCar);

// @desc Show Parking status
// @route POST /parker/status
router.post("/status", checkParkingSpot, parkingStatus);

module.exports = router;
