const { User } = require('../../db')

async function deleteUser(req, res) {
    const {id} = req.params
    try {
        await User.destroy({
            where: {
                id: id
            }
        })
        res.send('Usuario eliminado!')
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    deleteUser
}