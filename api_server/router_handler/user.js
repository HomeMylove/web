// 在这里定义和用户相关的路由处理函数, 供 router/user.js 模块进行调用
// 导入数据可操作模块
const db = require('../db/index')
    // 导入 bcrypt 包，用于加密
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
    // 导入配置文件
const config = require('../config')


// 注册用户处理函数
module.exports.regUser = (req, res) => {
    const userinfo = req.body
    console.log(userinfo);
    // console.log(userinfo);
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({status: 1,message: '用户名或密码不合法',})
    //     return res.cc('用户名或密码不合法')
    // }
    // 定义 sql 语句
    const sqlStr = 'SELECT * FROM ev_users WHERE username=?'

    // 查询
    db.query(sqlStr, userinfo.username, (err, results) => {
        // 执行失败
        if (err) {
            // return res.send({status: 1,message: err.message})
            return res.cc(err)
        }

        // 被占用
        // console.log(results);
        if (results.length > 0) {
            // return res.send({ status: 1,message: '用户名已存在'})
            return res.cc('用户名已存在')
        }
        // TODO

        // 调用 bcrypt.hashSync() 对密码进行加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        // 添加
        const sql = 'INSERT INTO ev_users SET ?'
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            // 执行失败
            if (err) {
                // return res.send({status: 1,message: err.message})
                return res.cc(err)
            }
            // 执行成功，但行数不为 1
            if (results.affectedRows !== 1) {
                // return res.send({status: 1,message: '注册用户失败，稍后重试'})
                return res.cc('注册用户失败，稍后重试')
            }
            // 注册成功
            // res.send({status: 0, message: '注册成功'})
            return res.cc('注册成功', 0)
        })
    })
}



// 登录处理函数
module.exports.login = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
        // 定义 SQL 语句
    const sql = 'SELECT * FROM ev_users WHERE username=?'
        // 执行 SQL 语句
    db.query(sql, userinfo.username, (err, results) => {
        // 查询失败
        if (err) {
            return res.cc(err)
        }
        // 查询成功，但是没有
        if (results.length !== 1) {
            return res.cc('账号不存在')
        }

        // TODO 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

        if (!compareResult) {
            return res.cc('密码错误')
        }

        // TODO 登录成功，生成 token 字符串
        const user = {...results[0], password: '', user_pic: '' }

        // 对用户的信息进行加密
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })

        return res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr,
        })
    })
}