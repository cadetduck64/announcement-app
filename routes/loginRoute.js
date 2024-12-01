const {Router} = require('express')
const {loginControllerFunc} = require('../controllers/loginController.js')
const passport = require('passport')

const loginRoute = Router()

loginRoute.get('/', async (req, res) => {
    console.log('login')
    res.render('loginView')
})

loginRoute.post('/', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/signup'}), )

module.exports = loginRoute;