const { Router } = require('express');
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 
const { authenticateTokenAdmin, authenticateTokenSuperAdmin } = require('../utils/jwt-helper')
const usersRoute = require ('./user');

// IMPORTACIONES DE MERCADO PAGO

const {payment} = require('../controllers/Payments/payments')
const {getOrder} = require('../controllers/Payments/Orders/getOrder')
const { createOrderMP } = require('../controllers/Payments/Orders/createOrder')
const { getUserOrders } = require('../controllers/Payments/Orders/getUserOrders')
const {getAdminOrders} = require('../controllers/Payments/Orders/getAllOrders')



const router = Router();

router.use("/usuarios/", usersRoute);

router.get('/products', authenticateTokenAdmin, getAllProducts)

router.post('/create', authenticateTokenAdmin,  createProduct)

router.put('/update/:id', authenticateTokenAdmin, updateProduct)

router.delete('/delete/:id', authenticateTokenAdmin, deleteProduct)

// RUTAS PARA MERCADO PAGO

router.post('/payments', payment)

router.get('/order', getOrder)

router.post('/createOrder', createOrderMP)

router.get('/allOrders', getAdminOrders)

router.get('/userOrder/:userId', getUserOrders)



module.exports = router;
