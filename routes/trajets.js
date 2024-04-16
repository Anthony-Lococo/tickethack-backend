var express = require("express");
var router = express.Router();
const Trajets = require("../models/trajets");
require("../models/connection");
const { checkFields } = require("../modules/checkFields");

router.post("/search", (req, res) => {
  let findTravel = [];
  if (checkFields(req.body, ["departure", "arrival", "date"]) === false) {
    res.json({ result: false, message: "Empty fields" });
  } else {
    Trajets.find({
      departure: new RegExp(`${req.body.departure}`, `i`),
    }).then((data) => {
      if (data.length === 0) {
        res.json({ result: false, message: "No trip found" });
      } else {
        for (const value of data) {
          const reqDate = new Date(req.body.date);
          if (reqDate <= value.date) {
            if (req.body.arrival === value.arrival) {
              findTravel.push(value);
              console.log(value);
            }
          }
        }
        res.json({ result: true, message: findTravel });
      }
    });
  }
});

module.exports = router;
