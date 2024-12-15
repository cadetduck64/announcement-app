const database = require('../database/queries')

const newMemberControllerFunc = async (req, res) => {
    if (req.body.memberPassword == 'asdf')
    {console.log('welcome new member')
        return database.makeMember(req.user.password)}
    else if (req.body.memberPassword == 'makemeadminplz')
        {return database.makeAdmin(req.user.password)}
    return console.log('new member controller')
}

module.exports = {newMemberControllerFunc};