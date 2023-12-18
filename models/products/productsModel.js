const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [[true, "name must be provide"]],
    },
    price: {
        type: Number,
        required: [true, "price must be provide"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: String,
        default: 4.9,
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Product", productSchema);