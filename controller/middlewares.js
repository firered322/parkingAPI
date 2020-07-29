exports.checkParkingSpot = (req, res, next) => {
    let { parkingSlot } = req.body;
    if (parkingSlot) {
      parkingSlot = parkingSlot.toUpperCase();
      if (parkingSlot.charCodeAt(0) < 75) {
        next();
      } else {
        return res.send("There are only 10 slots, from A to J");
      }
    } else {
      next();
    }
  }