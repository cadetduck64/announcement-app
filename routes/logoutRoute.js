const {Router} = require('express')

const logoutRoute = Router()

logoutRoute.get('/', async (req, res) => {
    req.logout((err) => {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
    console.log('logout')
})

module.exports = logoutRoute;