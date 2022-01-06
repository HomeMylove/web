const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'neta520', // 登录数据库的密码
    database: 'my_db_01' // 要操作的数据库
})

// const sqlStr = 'select * from users'

const user = { username: 'Spider-Man', password: 'abc12138' }

const sqlStr = 'INSERT INTO users (username,password) VALUES (?,?)'
    //?是占位符


db.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message); // 失败
    if (results.affectedRows === 1) { console.log('数据添加成功'); }
    // 执行查询语句， results 是一个对象数组
    // 执行 insert into 语句，results 是一个对象，包含 affectedRows 属性
})