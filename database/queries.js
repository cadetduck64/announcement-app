const pool = require('./pool')

const selectAll = async () => {
    const allUsers = await pool.query('select * from users')
    return allUsers
}

const newAccount = async (userName, userPassword) => {
    const newUser = await pool.query('insert into users (username, password) values ($1, $2);', [userName, userPassword])
    return newUser
}

const loginUser = async (userName) => {
    // const returningUser = await pool.query('SELECT username, password FROM users WHERE username = $1;', [userName]);
    const returningUser = await pool.query('SELECT * FROM users WHERE username = $1;', [userName]);
    return returningUser
}

// const loginUser = async (userName, userPassword) => {
//     const returningUser = await pool.query('SELECT username, password FROM users WHERE username = $1 and password = $2;', [userName, userPassword]);
//     return returningUser
// }

const newMessage = async (username, message) => {
    const newMessage = await pool.query('insert into messages (message, date_posted, posting_user) values ($1, $2, $3);', [message, Date() ,username])
    return newMessage
}

const getAllMessages = async () => {
    const messageList = await pool.query('select * from messages')
    return messageList
}

const makeMember = async (password) => {
    const newMember = await pool.query(`update users set member = 'member' where password = ($1)`, [password])
    return newMember
}

const makeAdmin = async (password) => {
    const newAdmin = await pool.query(`update users set admin = 'admin' where password = ($1)`, [password])
    return newAdmin
}

const deleteMessage = async (id) => {
    const deletedMessage = await pool.query(`delete from messages where id = ($1)`, [id])
    return deletedMessage
}

const isAdmin = async () => {}

module.exports = {
    selectAll,
    newAccount,
    loginUser,
    newMessage,
    getAllMessages,
    makeMember,
    makeAdmin,
    isAdmin,
    deleteMessage
}