const mongoose = require('mongoose')

function connectMongoDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/Flipkart')
    .then(response => console.log('database connected'))
    .catch(err => console.error(err.message))
}

module.exports = { connectMongoDB }