var express = require("express");
var router = express.Router();
const Trajets = require("../models/trajets");
require("../models/connection");
const { checkFields } = require("../modules/checkFields");

router.get("/search", (req, res) => {
  let findTravel = [];
  if (checkFields(req.query, ["departure", "arrival", "date"]) === false) {
    res.json({ result: false, message: "Empty fields" });
  } else {
    Trajets.find({
      departure: new RegExp(`${req.query.departure}`, `i`),
    }).then((data) => {
      if (data.length === 0) {
        res.json({ result: false, message: "No trip found" });
      } else {
        for (const value of data) {
          const reqDate = new Date(req.query.date);

          if (reqDate <= value.date) {
            if (
              req.query.arrival === value.arrival &&
              reqDate.getDate() === value.date.getDate() &&
              reqDate.getFullYear() === value.date.getFullYear()
            ) {
              findTravel.push(value);
            }
          }
        }
        res.json({ result: true, message: findTravel });
      }
    });
  }
});

module.exports = router;
