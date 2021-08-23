const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cartItem_Title: {
        type: String,
        required: true
    },
    cartItem_Qty: {
        type: Number,
        required: true
    },
    cartItem_Price: {
        type: Number,
        required: true
    },
});

const Order = mongoose.model("order", orderSchema)

module.exports = Order;

