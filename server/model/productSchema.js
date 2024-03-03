const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    altImage: String,
    thumbnail: String,
    images: [{
        type: String
    }]
})

const Products = mongoose.model('products', productSchema)

module.exports = { Products }