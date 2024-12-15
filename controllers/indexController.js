const database = require('../database/queries')

const indexControllerFunc = async (req, res) => {
    // const allUsers = await database.selectAll()
    // return allUsers.rows
    const allMessages = await database.getAllMessages()
    return allMessages.rows
}

module.exports = {indexControllerFunc};