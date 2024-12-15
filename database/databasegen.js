const { Pool } = require('pg')
require('dotenv').config()

const schema = `
CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,username VARCHAR ( 255 ) );
ALTER TABLE users ADD COLUMN IF NOT EXISTS username varchar(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS password varchar(255) ;
ALTER TABLE users ADD COLUMN IF NOT EXISTS firstname varchar(255) ;
ALTER TABLE users ADD COLUMN IF NOT EXISTS lastname varchar(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS member varchar(255);
ALTER TABLE users ADD COLUMN IF NOT EXISTS admin varchar(255);`


console.log(process.env.HOST)

const generateDatabase = async () => {
    console.log('generating database')
    const database = new Pool({
        connectionString: process.env.POSTGREURL,
    })
    // await database.connect()
    await console.log(database.query(schema))
    // await database.end()
    return console.log('done generating table')
}
generateDatabase()

module.exports = {
    generateDatabase
}

