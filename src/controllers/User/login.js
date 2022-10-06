const { User } = require('../../db')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { jwtTokens } = require('../../utils/jwt-helper')

async function login(req, res) {
    let { email, password } = req.body
    try {
        if (!email || !password) res.send("Debe ingresar su email y contraseña")
        // Email check
        let userEmail = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(userEmail)
        if (!userEmail) {
            res.send('El email ingresado es incorrecto')
        }
            let validPass = bcrypt.compareSync(password, userEmail.password)
            if(!validPass) res.send("Contraseña invalida")
            
        let tokens = jwtTokens(userEmail)
        res.json(tokens)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    login
}