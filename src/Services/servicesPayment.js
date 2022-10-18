const { ACCESS_TOKEN_MP } = process.env
const axios = require("axios");

class PaymentService {
  async createPayment(req, res, prod) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    let allProducts = []
    prod.forEach(p => {
      let obj = {
        "id": p.id,
        "title": p.name,
        "description": p.description,
        "category_id": p.category,
        "quantity": p.quantity,
        "picture_url": p.image,
        "unit_price": p.price
      }
      allProducts.push(obj)
    });

    const body = {
        payer_email: "test_user_91448486@testuser.com",
      items: allProducts,
      back_urls: {
        failure: "https://google.com/error",
        pending: "/pending",
        success: "https://google.com"
      },
      // "auto_return": "approved",
      "shipments": {
        cost: prod[0].cost,
        free_shipping: prod[0].free,
      },
      "payer": {
        "address": {
          "zip_code": prod[0].zipcode,
          "street_name": prod[0].streetname,
          "street_number": prod[0].streetnumber
        }
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN_MP}`
      }
    });

    return payment.data;
  }
}

module.exports = PaymentService;