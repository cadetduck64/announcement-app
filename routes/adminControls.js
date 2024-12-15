const {Router} = require('express')
const {adminControllerFunc} = require('../controllers/adminControlsController')
const passport = require('passport')

const adminControlsRoute = Router()

adminControlsRoute.get('/deletemessage', async (req, res) => {
    await adminControllerFunc()
    console.log('ADMIN PAGE')
    res.redirect('/')
})

adminControlsRoute.post('/deletemessage', async (req, res) => {
    adminControllerFunc(req)
    console.log('POSTED ADMIN PAGE')
    res.redirect('/')    
})

module.exports = adminControlsRoute;