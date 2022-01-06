const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'neta520',
    database: 'my_db_01'
})

const user = {
    username: 'Ganyu',
    password: 520
}

const sqlStr = 'INSERT INTO users SET ?'

db.query(sqlStr, user, (err, results) => {
    if (err) return console.log('错误' + err.message);
    if (results.affectedRows === 1) { console.log('添加数据成功'); }
})