const jwt = require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET} = process.env

function jwtTokens({id, email, password, name, isAdmin, superAdmin}) {
    const user = {id, email, password, name, isAdmin, superAdmin}
    const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET, {expiresIn: "5m"} )
    return ({accessToken})
}

function authenticateTokenAdmin(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) res.send('Acceso denegado')

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(user)
        if(user.isAdmin === false) res.send("Usted no es un admin, acceso denegado")
        if(err) return res.json({err: err.message})
        res.user = user
        next()
    })
}

function authenticateTokenSuperAdmin(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) res.send('Acceso denegado')

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(user)
        if(user.superAdmin === false) res.send("Usted no es super admin, acceso denegado")
        if(err) return res.json({err: err.message})
        res.user = user
        next()
    })
}

module.exports= {
    jwtTokens,
    authenticateTokenAdmin,
    authenticateTokenSuperAdmin
}