const mongoose = require('mongoose');

const connectDB = async (url) => {
    return await mongoose.connect(url, {
    })
}
//what is dotenv?
/**
 * 
 */
module.exports = connectDB;