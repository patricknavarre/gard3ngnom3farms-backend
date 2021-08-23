const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    buyerEmail: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    specialNote: {
        type: String,
        
    }
});

// function that will print out order to printer or send email/twilio text 
//  dashboard - prepared order 

const Order = mongoose.model("order", orderSchema)

module.exports = Order;

