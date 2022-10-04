const { User } = require('../../db')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { jwtTokens } = require('../../utils/jwt-helper')

async function login(req, res) {
    let { email, password } = req.body
    try {
        // Email check
        let userEmail = await User.findOne({
            where: {
                email: email
            }
        })
        if (!userEmail) {
            res.send('El email ingresado es incorrecto')
        }
        // Password check
        let userPass = bcrypt.compare(password, userEmail.password)
        if (!userPass) {
            res.send("Password incorrecta")
        }
        let tokens = jwtTokens(userEmail)
        res.json(tokens)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    login
}