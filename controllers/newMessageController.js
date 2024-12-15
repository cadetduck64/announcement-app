const database = require('../database/queries')

const newMessageControllerFunc = async (req, res) => {
    const newMessage = await database.newMessage(req.username, req.message)
    console.log('new message controller')
    return newMessage
}

module.exports = {newMessageControllerFunc};