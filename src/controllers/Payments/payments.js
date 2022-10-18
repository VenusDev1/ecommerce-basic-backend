const paymentController = require('./paymentController');
const servicePayment = require('../../Services/servicesPayment');
const paymentInstance = new paymentController(new servicePayment()); 

const payment = async (req, res, next ) => {
    const prod = req.body
    paymentInstance.getPaymentLink(req, res, prod);

}

module.exports = {payment}
