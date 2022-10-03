const { Product } = require('../../db')

async function updateProduct(req, res) {
    const {id} = req.params
    const {name, image, price, description, stock, categorie, discount, brand} = req.body

    try {
        await Product.update({
            name,
            image,
            price,
            description,
            stock,
            categorie,
            discount,
            brand,
        }, {
            where: {
                id: id
            }
        }) 
        res.send('Producto actualizado!')
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    updateProduct
}