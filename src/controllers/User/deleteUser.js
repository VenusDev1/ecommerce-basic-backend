const { User } = require('../../db')

async function deleteUser(req, res) {
    const {idUser} = req.params
    try {
        await User.destroy({
            where: {
                id: idUser
            }
        })
         res.redirect('/users');
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    deleteUser
}