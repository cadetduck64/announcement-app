const {Router} = require('express')
const {newMessageControllerFunc} = require('../controllers/newMessageController')
const passport = require('passport')

const newMessageRoute = Router()

newMessageRoute.get('/', async (req, res) => {
    console.log('new message')  
    if (!req.user)
    {res.render('404')}
    res.render('newMessageView', {user: req.user})
})

newMessageRoute.post('/', async (req, res) => {
    console.log('posting message')
    console.log(req.body)
    newMessageControllerFunc(req.body)
    res.redirect('/')
})


  
module.exports = newMessageRoute;