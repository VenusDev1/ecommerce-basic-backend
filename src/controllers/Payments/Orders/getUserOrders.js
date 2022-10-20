const {Order, User} = require("../../../db")

const getUserOrders = async (req,res) => {
    const {userId} = req.params
    try {
    const orders = await User.findByPk(userId, {
        include: Order
    })
    res.json(orders)
} catch (error) {
    console.log(error)
}
}

module.exports = { getUserOrders }