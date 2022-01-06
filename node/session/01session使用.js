const express = require('express')
const app = express()

const session = require('express-session')

app.use(session({
    secret: 'ganyu',
    resave: false,
    saveUninitialized: true
}))

app.use(express.static('./test'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({ status: 1, msg: '登录失败' })
    }

    req.session.user = req.body // 用户信息
    req.session.islogin = true // 登录状态

    res.send({ status: 0, msg: '登录成功' })
})
app.get('/api/username', (req, res) => {
    if (!req.session.islogin) {
        return res.send({
            status: 1,
            msg: 'fail'
        })
    }
    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

app.post('/api/logout', (req, res) => {
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})