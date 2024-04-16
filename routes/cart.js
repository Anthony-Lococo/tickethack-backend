var express = require("express");
var router = express.Router();
const Cart = require("../models/cart");
require("../models/connection");

router.post("/", (req, res) => {
  const newCart = new Cart({
    travel: req.body.id,
  });
  newCart.save().then((data) => console.log(data));
});

router.get("/select", (req, res) => {
  Cart.find()
    .populate("travel")
    .then((data) => res.json({ result: true, message: data }));
});

router.delete("/delete", (req, res) => {
  Cart.deleteOne({ id: req.query.id }).then((data) => console.log(data));
});

module.exports = router;