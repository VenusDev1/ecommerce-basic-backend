const { Router } = require('express');
const { Product, User } = require('../db');
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 
const usersRoute = require ('./user');
// const { createUser } = require('../controllers/User/createUser')
// const { getAllUsers } = require('../controllers/User/getAllUsers')
// const { deleteUser } = require('../controllers/User/deleteUser')
// const { updateUser } = require('../controllers/User/updateUser')

const router = Router();

router.use("/", usersRoute);

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

// router.get('/users', getAllUsers)

// router.get('/users/signup', (req, res) => {
//     res.render('User/signup')
// })

// router.post('/user', createUser)

// router.get('/users/login', (req, res) => {
//     res.render('User/login')
// })

// router.get('/editUser/:idUser', async (req, res) => {
//     const {idUser} = req.params
//     let userToEdit = await User.findByPk(idUser)
//     res.render('User/edit', {user: userToEdit})
// })

// router.put('/updateUser/:idUser', updateUser)


// router.get('/deleteUser/:idUser', deleteUser)




module.exports = router;
