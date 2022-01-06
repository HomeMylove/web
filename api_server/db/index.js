const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'neta520',
    database: 'my_db_01',
})

// 暴露出 db 对象
module.exports = db