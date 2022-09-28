const { Router } = require('express');
const { Product } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//RUTAS PRODUCTS
const { getAllProducts } = require('../controllers/Products/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 

//RUTAS USER

const { createUser } = require('../controllers/User/createUser')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//RUTA HACIA LANDING PAGE

router.get('/', (req, res) => {
    res.render('index')
})

//RUTA PARA VER TODOS LOS PRODUCTOS EN DB

router.get('/products', getAllProducts)

//RUTA PARA IR AL FORMULARIO DE CREACION DE PRODUCTO

router.get('/createProduct', (req, res) => {
    res.render('Products/create')
})

//RUTA PARA GUARDAR EL PRODUCTO EN DB

router.post('/create', createProduct)

//RUTA PARA VISUALIZAR EL FORMULARIO DE EDICION

router.get('/edit/:id', async (req, res) => {
    const {id} = req.params
    let productToEdit = await Product.findByPk(id)
    res.render('Products/edit', {product: productToEdit})
})

router.put('/update/:id', updateProduct)

//RUTA PARA ELIMINAR UN PRODUCTO

router.get('/delete/:idProduct', deleteProduct)

//RUTAS USER

router.post('/user', createUser)





module.exports = router;
