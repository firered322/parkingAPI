const express = require("express");
const ParkingRouter = require("./routes/parking");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/parker", ParkingRouter);

app.listen(PORT, () => {
  console.log(`App running at port: ${PORT}`);
});
