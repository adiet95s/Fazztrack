const { Pool } = require('pg')

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'task-week04',
   password: 'root'
})

module.exports = pool
