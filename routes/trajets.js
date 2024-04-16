var express = require("express");
var router = express.Router();
const Trajets = require("../models/trajets");
const mongoose = require("moongoose");
const { checkFields } = require("../modules/checkFields");

router.post("/trajets", (res, req) => {
  if (checkFields(req.body, ["departure", "arrival"]) === false) {
    res.json({ result: false, message: "Empty fields" });
  } else {
    Trajets.find({
      departure: new RegExp(`${req.body.departure}.*`, `i`),
    }).then((data) => {
      if (!data) {
        res.json({ result: false, message: "No trip found" });
      }
    });
  }
});

module.exports = router;
