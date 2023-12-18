const mongoose = require("mongoose");
const express = require("express");
const products_routes = require("../routes/products/productsRoute");


const app = express();

app.use("/api/products", products_routes);


const connectDB = (URI, PORT, BASE_URL) => {
    mongoose.connect(URI)
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
                console.log(`Server is running on port: ${PORT}`);
                console.log(`URL is ${BASE_URL}${PORT}`);
            });
        })
        .catch((error) => {
            console.error("Error connecting to the database:", error);
        });
};

module.exports = connectDB;
