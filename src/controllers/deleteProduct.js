const { Product } = require('../db')

async function deleteProduct(req, res) {
    const {idProduct} = req.params
    try {
        await Product.destroy({
            where: {
                id: idProduct
            }
        })
         res.redirect('/products');
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    deleteProduct
}