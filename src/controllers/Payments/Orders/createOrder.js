const {Order, User} = require('../../../db')


const createOrderMP = async (req, res) => {
    const { payment_status, merchant_order_id, userId } = req.body
    let user = await User.findByPk(userId)
    try {
        let newOrder = await Order.create({
            payment_status,
            merchant_order_id,
        })
        newOrder.addUser(user)
        res.send('Orden creada correctamente')
    } catch (error) {
        console.log(error)
        // res.status(404).send(error)
    }
}

module.exports = { createOrderMP }