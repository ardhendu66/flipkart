const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URI

function connectMongoDB() {
    mongoose.connect(mongoUrl)
    .then(response => console.log('database connected'))
    .catch(err => console.error(err.message))
}

module.exports = { connectMongoDB }