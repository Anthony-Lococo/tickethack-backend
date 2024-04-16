const mongoose = require("mongoose");

const bookedSchema = mongoose.Schema({
  travel: { type: mongoose.Schema.Types.ObjectId, ref: "trajets" };
});

const Booked = mongoose.model("booked", bookedSchema);
module.exports = Booked;
