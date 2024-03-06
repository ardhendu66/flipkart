const { Products } = require('../model/Products')

const getAllProducts = async (req, res) => {
    try {
        let products = await Products.find({})
        const { _sort, _order, category, brand, _page, _limit } = req.query
        // filtering products
        if(category) {
            products = await Products.find({category: category})
        }
        if(brand) {
            products = await Products.find({brand: brand})
        }
        // sorting products
        if(_sort && _order) {
            products = products.sort({[_sort]: _order})
        }
        if(_page && _limit) {
            const pagesize = _limit
            const page = _page
            products = await products.skip(pagesize * (page - 1)).limit(pagesize)
        }
        // const docs = await Products.exec()
        return res.json(products)
    }
    catch(err) {
        console.error(err.message)
        return res.status(500).json({error: err.message})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = new Products(req.body)
        const newProduct = await product.save()
        if(!newProduct) {
            return res.json({error: "Product creation failed :( 😥"})
        }
        return res.json({
            message: "New Product creation success :) 😊",
            product: product
        })
    }
    catch(err) {
        console.error(err.message)
        return res.status(500).json({error: err.message})
    }
}

module.exports = { getAllProducts, createProduct }