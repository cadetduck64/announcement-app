const {Router} = require('express')
const {indexControllerFunc} = require('../controllers/indexController')
const passport = require('passport')

const indexRoute = Router()

indexRoute.get('/', async (req, res) => {
    console.log('index')
    res.render('indexView', {user: req.user}
    )
})


  
module.exports = indexRoute;