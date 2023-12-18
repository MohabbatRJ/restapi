const dotenv = require("dotenv");

const connectDB = require('./db/connect');

dotenv.config();

const URI = process.env.MONGO_URL;
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(URI, PORT, BASE_URL);
    } catch (error) {
        console.log(error);
    }
}

start();