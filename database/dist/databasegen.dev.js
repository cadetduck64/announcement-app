"use strict";

var _require = require('pg'),
    Pool = _require.Pool;

require('dotenv').config();

var schema = "\nCREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,username VARCHAR ( 255 ) );\nALTER TABLE users ADD COLUMN IF NOT EXISTS username varchar(255);\nALTER TABLE users ADD COLUMN IF NOT EXISTS password varchar(255) ;\nALTER TABLE users ADD COLUMN IF NOT EXISTS firstname varchar(255) ;\nALTER TABLE users ADD COLUMN IF NOT EXISTS lastname varchar(255);\nALTER TABLE users ADD COLUMN IF NOT EXISTS member varchar(255);\nALTER TABLE users ADD COLUMN IF NOT EXISTS admin varchar(255);";
console.log(process.env.HOST);

var generateDatabase = function generateDatabase() {
  var database;
  return regeneratorRuntime.async(function generateDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('generating database');
          database = new Pool({
            connectionString: process.env.POSTGREURL
          }); // await database.connect()

          _context.next = 4;
          return regeneratorRuntime.awrap(console.log(database.query(schema)));

        case 4:
          return _context.abrupt("return", console.log('done generating table'));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

generateDatabase();
module.exports = {
  generateDatabase: generateDatabase
};