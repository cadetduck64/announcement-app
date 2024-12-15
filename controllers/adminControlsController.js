const database = require('../database/queries')

const adminControllerFunc = async (req, res) => {
    const deleteMessage = await database.deleteMessage(req.body.messageid)
    return deleteMessage
}

module.exports = {adminControllerFunc};