const {Router} = require('express')
const {indexControllerFunc} = require('../controllers/indexController')
const passport = require('passport')

const indexRoute = Router()

indexRoute.get('/', async (req, res) => {
    console.log('index')
    const messageList = await indexControllerFunc()
    console.log('all messages: ' + messageList[0])
    res.render('indexView', {user: req.user,
        messages: messageList
    }
    )
})


  
module.exports = indexRoute;