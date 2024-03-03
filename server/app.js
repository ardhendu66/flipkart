const express = require('express')
const app = express()
const { connectMongoDB } = require('./db/dbConfig')
const { Products } = require('./model/productSchema')
const { products } = require('./db/data')

app.post('/products', async (req, res) => {
    const pro = await Products.insertMany(products)
    res.json(pro)
})

app.listen(3000, () => {
    connectMongoDB()
    console.log('Server running... http://localhost:3000')
})