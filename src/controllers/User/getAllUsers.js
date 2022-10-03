const { User } = require('../../db');

async function getAllUsers(req, res) {
    try {
        let allUsers = await User.findAll()
        res.send(allUsers)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers
}