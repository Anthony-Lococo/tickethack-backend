const mongoose = require("mongoose");

const bookedSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const Booked = mongoose.model("booked", bookedSchema);
module.exports = Booked;
