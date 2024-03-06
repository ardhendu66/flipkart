const express = require('express')
const router = express.Router()
const { createProduct, getAllProducts } = require('../controller/Products')

router.get('/', getAllProducts)

router.post('/', createProduct)

module.exports = router