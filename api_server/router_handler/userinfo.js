const db = require('../db/index')
const bcrypt = require('bcryptjs')



// 获取用户信息的处理函数
module.exports.getUserinfo = (req, res) => {
    // 定义 SQL 语句
    const sqlStr = 'SELECT id,username,nickname,email,user_pic FROM ev_users WHERE id=?'

    // 查询
    db.query(sqlStr, req.user.id, (err, results) => {
        // 查询失败
        if (err) return res.cc(err)
            // 查询成功，但是不为1
        if (results.length !== 1) {
            return res.cc('获取用户信息失败')
        }
        res.send({
            status: 0,
            message: '获取用户信息成功',
            ...results[0]
        })
    })
}

// 更新用户信息的处理函数
module.exports.updateUserinfo = (req, res) => {
    // 定义
    const sqlStr = 'UPDATE ev_users SET ? WHERE id=?'
        // 执行
    db.query(sqlStr, [req.body, req.body.id], (err, results) => {
        // 失败
        if (err) { return res.cc(err) }
        // 成功但为0
        if (results.affectedRows !== 1) { return res.cc('修改用户信息失败') }

        return res.cc('修改用户信息成功', 0)
    })
}

// 更新密码的处理函数
module.exports.updatePassword = (req, res) => {
    // 根据 id 查询信息
    const sqlStr = 'SELECT * FROM ev_users WHERE id=?'

    db.query(sqlStr, req.user.id, (err, results) => {
        if (err) { return res.cc(err) }
        if (results.length !== 1) {
            return res.cc('查无此人')
        }
        // TODO 密码是否相同

        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)

        if (!compareResult) { return res.cc('原密码错误，不给你改') }

        const newPwd = bcrypt.hashSync(req.body.newPwd, 10)

        const sql = 'UPDATE ev_users SET password=? WHERE id=?'

        db.query(sql, [newPwd, req.user.id], (err, results) => {
            if (err) { return res.cc(err) }
            if (results.affectedRows !== 1) {
                return res.cc('修改失败')
            }
            return res.cc('修改成功', 0)
        })
    })
}

// 更换头像的处理函数
module.exports.updateAvater = (req, res) => {
    // 定义 sql 语句
    const sqlStr = 'UPDATE ev_users SET user_pic=? WHERE id=?'
        // 执行 sql 语句
    db.query(sqlStr, [req.body.avater, req.user.id], (err, results) => {
        // 执行失败
        if (err) { return res.cc(err) }
        // 修改失败
        if (results.affectedRows !== 1) {
            return res.cc('修改头像失败')
        }
        // 修改成功
        return res.cc('修改头像成功', 0)
    })
}