const { Router } = require('express');

const { getAllUsers } = require('../controllers/User/getAllUsers')
const { deleteUser } = require('../controllers/User/deleteUser')
const { updateUser } = require('../controllers/User/updateUser')
const { createUser } = require('../controllers/User/createUser')
const { login } = require('../controllers/User/login')
const { authenticateToken } = require('../utils/jwt-helper')


const router = Router();

router.get('/users', authenticateToken, getAllUsers)

router.post('/create', createUser)

router.put('/update/:id', authenticateToken, updateUser)

router.delete('/delete/:id', authenticateToken, deleteUser)

router.post('/login', login)


module.exports = router;
