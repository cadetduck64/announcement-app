const database = require('../database/queries')

const indexControllerFunc = async (req, res) => {
    const allUsers = await database.selectAll()
    return allUsers.rows
}

module.exports = {indexControllerFunc};