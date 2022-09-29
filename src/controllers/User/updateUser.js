const { User } = require('../../db')

async function updateUser(req, res) {
    const {idUser} = req.params
    const {name, email, username, password} = req.body

    try {
        await User.update({
            name, 
            email, 
            username, 
            password
        }, {
            where: {
                id: idUser
            }
        }) 
         res.redirect('/users');
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    updateUser
}