const {Router} = require('express')
const {signUpControllerFunc} = require('../controllers/signupController.js')


const signupRoute = Router()

signupRoute.get('/', async (req, res) => {
    console.log('signup')
    res.render('signupView')
})

signupRoute.post('/', async (req, res) => {
    console.log('posted signup')
    signUpControllerFunc(req.body)
    res.redirect('/')
})

module.exports = signupRoute;