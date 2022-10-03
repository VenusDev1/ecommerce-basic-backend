const { Product } = require('../../db')

async function deleteProduct(req, res) {
    const {id} = req.params
    try {
        await Product.destroy({
            where: {
                id: id
            }
        })
        res.send('Producto eliminado')
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    deleteProduct
}