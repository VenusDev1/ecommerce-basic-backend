const { Router } = require('express');
const { Product } = require('../db');
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 
const { createUser } = require('../controllers/User/createUser')

const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/products', getAllProducts)

router.get('/createProduct', (req, res) => {
    res.render('Products/create')
})

router.post('/create', createProduct)

router.get('/edit/:id', async (req, res) => {
    const {id} = req.params
    let productToEdit = await Product.findByPk(id)
    res.render('Products/edit', {product: productToEdit})
})

router.put('/update/:id', updateProduct)

router.get('/delete/:idProduct', deleteProduct)

router.post('/user', createUser)
router.get('/users', (req, res) => {
    res.render('User/home')
})
router.get('/users/signup', (req, res) => {
    res.render('User/signup')
})
router.get('/users/login', (req, res) => {
    res.render('User/login')
})





module.exports = router;
