const { Router } = require('express');
const { User } = require('../db');

const { getAllUsers } = require('../controllers/User/getAllUsers')
const { deleteUser } = require('../controllers/User/deleteUser')
const { updateUser } = require('../controllers/User/updateUser')
const { createUser } = require('../controllers/User/createUser')


const router = Router();


router.get('/users', getAllUsers)

router.get('/users/signup', (req, res) => {
    res.render('User/signup')
})

router.post('/user', createUser)

router.get('/users/login', (req, res) => {
    res.render('User/login')
})

router.get('/editUser/:idUser', async (req, res) => {
    const {idUser} = req.params
    let userToEdit = await User.findByPk(idUser)
    res.render('User/edit', {user: userToEdit})
})

router.put('/updateUser/:idUser', updateUser)


router.get('/deleteUser/:idUser', deleteUser)

module.exports = router;
