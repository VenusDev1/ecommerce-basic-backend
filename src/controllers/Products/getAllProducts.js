const { Product } = require('../../db');

async function getAllProducts(req, res) {
    try {
        let allProducts = await Product.findAll()
        res.send(allProducts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts
}