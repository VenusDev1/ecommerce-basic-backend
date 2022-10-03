const { User } = require('../../db')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

async function createUser(req, res) {
    try {
    let {name, email, celphone, picture, isAdmin, isSuperAdmin, username } = req.body
    let password = req.body.password

    if(password) {
       let passHashed = await bcrypt.hash(password, salt)
       let newUser = await User.create({
           name,
           email,
           username,
           password: passHashed,
           celphone,
           picture,
           isAdmin,
           isSuperAdmin,
        })
        res.send(newUser)
    }
    } catch (error) {
        res.send(error)
    }
}


module.exports =  {
    createUser 
}