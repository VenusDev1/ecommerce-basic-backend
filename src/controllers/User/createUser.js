const { User } = require('../../db')

async function createUser(req, res) {
    let {
        name,
        email,
        username,
        password
    } = req.body
    try {
        await User.create({
            name,
            email,
            username,
            password
        })
        res.send('Usuario creado correctamente!')
    } catch (error) {
        res.send(error)
    }
}


module.exports =  {
    createUser 
}