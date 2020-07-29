const express = require("express");
const {
  MAX_REQUEST_COUNT,
  AVAILABLE_PARKING_SLOTS,
} = require("../config/constants");
const router = express.Router();


// @desc Show Home
// @route GET /parker
router.get("/", (req, res) => {
  res.send(`<code>Your IP is: '${req.ip}'</code>`);
});

// @desc Request to park car with the car number
// @route POST /parker/park
router.post("/park", (req, res) => {
  const { carNumber } = req.body;
});

// @desc Request to park car with the car number
// @route POST /parker/unpark
router.post("/unpark", (req, res) => {
  const { carSlot } = req.body;
});

// @desc Show Home
// @route POST /parker/status
router.post("/status", (req, res) => {;
});

module.exports = router;
