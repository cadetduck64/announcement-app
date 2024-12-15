const {Router} = require('express')
const {newMemberControllerFunc} = require('../controllers/newMemberController')
const passport = require('passport')

const becomeMemberRoute = Router()

becomeMemberRoute.get('/', async (req, res) => {
    console.log('become a member')
    res.render('becomeMemberView')
})

becomeMemberRoute.post('/', passport.authenticate('local', {failureRedirect: '/signup'}), async(req, res) => {
    await newMemberControllerFunc(req)
    res.redirect('/become-a-member')    
})

module.exports = becomeMemberRoute;