const { Router } = require('express');
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 
const { authenticateTokenAdmin, authenticateTokenSuperAdmin } = require('../utils/jwt-helper')

const usersRoute = require ('./user');

const router = Router();

router.use("/usuarios/", usersRoute);

router.get('/products', authenticateTokenAdmin, getAllProducts)

router.post('/create', authenticateTokenAdmin,  createProduct)

router.put('/update/:id', authenticateTokenAdmin, updateProduct)

router.delete('/delete/:id', authenticateTokenAdmin, deleteProduct)


module.exports = router;
