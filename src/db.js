const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewURLParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to mongoDB")
    } catch (err) {
        console.error('Error connecting to database: ', err)
    }
}

module.exports = connectDB;