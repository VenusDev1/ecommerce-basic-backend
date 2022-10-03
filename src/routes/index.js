const { Router } = require('express');
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 
const usersRoute = require ('./user');

const router = Router();

router.use("/usuarios/", usersRoute);

router.get('/products', getAllProducts)

router.post('/create', createProduct)

router.put('/update/:id', updateProduct)

router.delete('/delete/:id', deleteProduct)


module.exports = router;
