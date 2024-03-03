const express = require('express')
const app = express()
const { connectMongoDB } = require('./db/dbConfig')
const { Products } = require('./model/productSchema')
const { products } = require('./db/data')

app.get('/', async (req, res) => {
    // await Products.insertMany(products)
    // res.json(Products.find({}))
    res.json("hello")
})

app.listen(3000, () => {
    connectMongoDB()
    console.log('Server running... http://localhost:3000')
})