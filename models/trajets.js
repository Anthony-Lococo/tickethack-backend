const mongoose = require("mongoose");

const trajetSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const Trajets = mongoose.model("trajets", trajetSchema);
module.exports = Trajets;
