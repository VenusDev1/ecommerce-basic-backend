const {Product} = require('../db')

async function createProduct(req, res) {
    let {
        name,
        image,
        price,
        description,
        stock,
        categorie,
        discount,
        brand,
    } = req.body
    
    try {
        await Product.create({
            name,
            image,
            price,
            description,
            stock,
            categorie,
            discount,
            brand,
        })
         res.redirect('/products');
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    createProduct
}