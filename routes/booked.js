var express = require("express");
var router = express.Router();
const Booked = require("../models/booked");
require("../models/connection");

router.post("/", (req, res) => {
  const newBooked = new Booked({
    travel: req.body.travel,
  });
  newBooked.save().then((data) => console.log(data));
});

router.get("/results", (req, res) => {
  Booked.find()
    .populate("travel")
    .then((data) => res.json({ result: true, message: data }));
});

module.exports = router;
