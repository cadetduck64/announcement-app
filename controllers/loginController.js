const database = require('../database/queries')

const loginControllerFunc = async (req, res) => {
    const returningUser = await database.loginUser(req.userNameLogin, req.passwordLogin)
    console.log(returningUser.rows)
    return returningUser.rows
}

module.exports = {loginControllerFunc};