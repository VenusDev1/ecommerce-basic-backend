const { User } = require('../../db')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


async function updateUser(req, res) {
    const {id} = req.params
    let {name, email, username} = req.body
    let password = req.body.password

    try {
        if(password) {
            let newPass = await bcrypt.hash(password, salt)
            let userUpdate = await User.update({
                name, 
                email, 
                username, 
                password: newPass
            }, {
            where: {
                id: id
            }
        }) 
        res.send('Usuario actualizado!')
    }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    updateUser
}