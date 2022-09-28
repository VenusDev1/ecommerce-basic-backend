const { Router } = require('express');
const { Product } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// const { getAllProducts } = require('../controllers/getAllProducts')
const { createProduct } = require('../controllers/Products/createProduct')
const { updateProduct } = require('../controllers/Products/updateProduct')
const { deleteProduct } = require('../controllers/Products/deleteProduct') 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//RUTA HACIA LANDING PAGE

router.get('/', (req, res) => {
    res.render('Products/index')
})

//RUTA PARA VER TODOS LOS PRODUCTOS EN DB

router.get('/products', async (req, res) => {
    try {
        let allProducts = await Product.findAll()
        res.render('Products/home', {productos:allProducts})
    } catch (error) {
        console.log(error)
    }
})

//RUTA PARA IR AL FORMULARIO DE CREACION DE PRODUCTO

router.get('/crear', (req, res) => {
    res.render('Products/create')
})

//RUTA PARA GUARDAR EL PRODUCTO EN DB

router.post('/save', createProduct)

//RUTA PARA VISUALIZAR EL FORMULARIO DE EDICION

router.get('/edit/:id', async (req, res) => {
    const {id} = req.params
    let productToEdit = await Product.findByPk(id)
    res.render('Products/edit', {product: productToEdit})
})

router.put('/update/:id', updateProduct)



//RUTA PARA ELIMINAR UN PRODUCTO

router.get('/delete/:idProduct', deleteProduct)





module.exports = router;
