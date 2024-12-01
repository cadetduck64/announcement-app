const database = require('../database/queries')
const bcrypt = require('bcryptjs')

const signUpControllerFunc = async (req, res) => {
    const hashPass = bcrypt.hash(req.password, 10, async (err, hashedPassword) => {
        const newAccount = await database.newAccount(req.userName, hashedPassword)
        return newAccount.rows
    })
    return hashPass
}

module.exports = {signUpControllerFunc};