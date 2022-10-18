const { ACCESS_TOKEN_MP } = process.env
const axios = require('axios')

const getOrder = async(req, res) => {
    const {merchant_order_id} = req.query
    const response = await axios.get(`https://api.mercadopago.com/merchant_orders/${merchant_order_id}`, {
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_MP}`
    }})
    const obj = {
        status: response.data.payments[0].status,
        items: response.data.items
    }
    res.json(obj)
}

module.exports = {getOrder}