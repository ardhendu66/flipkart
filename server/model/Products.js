const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: {
        type: Number,
        min: [0, 'wrong min price'],
        max: [1000000, 'wrong max price'],
        required: true
    },
    discountPercentage: { 
        type: Number,
        min: [1, 'wrong min discount-percentage'],
        max: [99, 'wrong max discount-percentage'],
        required: true
    },
    rating: { 
        type: Number,
        min: [1, 'wrong min rating'],
        max: [5, 'wrong max rating'],
        required: true,
        default: 0
    },
    stock: { 
        type: Number,
        min: [0, 'wrong min stock'], 
        required: true 
    },
    brand: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    altImage: { 
        type: String, 
        required: true 
    },
    thumbnail: { 
        type: String, 
        required: true 
    },
    images: [{
        type: String
    }],
    deleted: {
        type: Boolean,
        default: false
    }
})

const virtualId = productSchema.virtual('id')
virtualId.get(() => this._id)
productSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        delete ret._id
    }
})

const Products = mongoose.model('products', productSchema)

module.exports = { Products }