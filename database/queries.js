const pool = require('./pool')

const selectAll = async () => {
    const allUsers = await pool.query('select * from users')
    return allUsers
}

const newAccount = async (userName, userPassword) => {
    const newUser = await pool.query('insert into users (username, password) values ($1, $2);', [userName, userPassword])
    return newUser
}

const loginUser = async (userName, userPassword) => {
    const returningUser = await pool.query('SELECT username, password FROM users WHERE username = $1;', [userName]);
    return returningUser
}

// const loginUser = async (userName, userPassword) => {
//     const returningUser = await pool.query('SELECT username, password FROM users WHERE username = $1 and password = $2;', [userName, userPassword]);
//     return returningUser
// }


module.exports = {
    selectAll,
    newAccount,
    loginUser
}