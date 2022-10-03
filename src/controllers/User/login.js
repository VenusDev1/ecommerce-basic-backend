const { User } = require('../../db')
var bcrypt = require('bcryptjs');

async function login(req, res) {
    let {email, password} = req.body
    try{
        let userEmail = await User.findOne({
            where: {
                email:email
            }
        })
        if (userEmail) {
            let userPass = bcrypt.compare(password, userEmail.password)
            if(userPass) {
                res.send("Usuario logueado correctamente")
            } else {
                res.send("Algo salió mal")
            }
        }
    } catch(error) {
        res.send(error)
    }
}

module.exports = {
    login
}