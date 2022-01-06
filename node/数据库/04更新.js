const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'neta520',
    database: 'my_db_01'
})

const user = {
    id: '2',
    username: 'Kokomi',
    password: 'XINAHI'
}

const sqlStr = 'UPDATE users SET ?  WHERE id=?'


// 有两个占位符，所以要传两个参数
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log('错误' + err.message);
    if (results.affectedRows === 1) { console.log('修改数据成功'); }
})