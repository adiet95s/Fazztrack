const { Pool } = require('pg')

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'Movies-task04',
   password: 'root'
})

module.exports = pool
