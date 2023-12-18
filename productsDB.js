const dotenv = require("dotenv");
const connectDB = require('./db/connect');
const Product = require('./models/products/productsModel')
const ProductData = require('./products.json')

dotenv.config();

const URI = process.env.MONGO_URL;
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(URI);
        await Product.create(ProductData);
        console.log("successfully create");
    }
    catch (error) {
        console.log(error)
    }
}

start();