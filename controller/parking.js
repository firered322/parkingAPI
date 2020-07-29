const {
  MAX_REQUEST_COUNT,
  AVAILABLE_PARKING_SLOTS,
} = require("../config/constants");

exports.parkCar = (req, res) => {
  const { carNumber } = req.body;
  const parkingSlotArray = Object.keys(AVAILABLE_PARKING_SLOTS);
  Object.values(AVAILABLE_PARKING_SLOTS).every((parkingSlot, id) => {
    if (parkingSlot["status"]) {
      AVAILABLE_PARKING_SLOTS[parkingSlotArray[id]]["status"] = false;
      AVAILABLE_PARKING_SLOTS[parkingSlotArray[id]]["carNo"] = carNumber;
      return false;
    }
    return true;
  });
  console.log(AVAILABLE_PARKING_SLOTS);
  res.send("Parked the car");
};
exports.unparkCar = (req, res) => {
  let { parkingSlot } = req.body;
  parkingSlot = parkingSlot.toUpperCase();
  AVAILABLE_PARKING_SLOTS[parkingSlot]["status"] = true;
  AVAILABLE_PARKING_SLOTS[parkingSlot]["carNo"] = "";
  console.log(AVAILABLE_PARKING_SLOTS);
  res.send("Unparked the car");
};

exports.parkingStatus = (req, res) => {
  let { parkingSlot, carNumber } = req.body;

  if (parkingSlot) {
    parkingSlot = parkingSlot.toUpperCase();

    if (AVAILABLE_PARKING_SLOTS[parkingSlot]["carNo"]) {
      let car = AVAILABLE_PARKING_SLOTS[parkingSlot]["carNo"];
      res.send(`The car parked at slot ${parkingSlot} is ${car}`);
    } else {
      res.send(`The slot ${parkingSlot} is free`);
    }
  } else if (carNumber) {
    const parkingSlotArray = Object.keys(AVAILABLE_PARKING_SLOTS);
    Object.values(AVAILABLE_PARKING_SLOTS).every((parkingSlot, id) => {
      if (parkingSlot["carNo"] == carNumber) {
        res.send(
          `The car numbered ${carNumber} is parked at spot ${
            Object.keys(AVAILABLE_PARKING_SLOTS)[id]
          }`
        );
        return false;
      }
      return true;
    });
    res
      .status(400)
      .send("Not found, please check the SLOT number and/or the car number");
  }
};
