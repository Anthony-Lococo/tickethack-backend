const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  travel: { type: mongoose.Schema.Types.ObjectId, ref: "trajets" },
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
