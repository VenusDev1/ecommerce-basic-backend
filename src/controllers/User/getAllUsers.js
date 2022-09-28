const { User } = require('../../db');

async function getAllUsers(req, res) {
    try {
        let allUsers = await User.findAll()
         res.render('User/home', {users:allUsers});
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers
}