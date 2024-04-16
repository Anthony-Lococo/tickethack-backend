var express = require("express");
var router = express.Router();
const Booked = require("../models/booked");
require("../models/connection");

router.post("/", (req, res) => {
  const newBooked = new Booked({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.data,
  });
  newBooked.save().then((data) => console.log(data));
});

module.exports = router;
