const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')



// 解决跨域问题
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// 定义 secret 秘钥
const secretKey = 'wodenvyouWbb'
    // 还原 token
app.use(expressJWT({ secret: secretKey, algorithms: ['HS256'], }).unless({ path: [/^\/api\//] }))


app.post('/api/login', (req, res) => {
    const userinfo = req.body
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({ status: 400, msg: '登录失败' })
    }

    //    登录成功后，调用 jwt.sign() 方法生成 JWT 字符串，并通过 token 属性发送给客户端
    // 参数1 用户的信息对象
    // 参数2 加密的秘钥
    // 参数3 配置对象，有效期

    const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '300s' })

    res.send({
        status: 200,
        msg: '登录成功',
        token: tokenStr
    })
})

app.get('/admin/getinfo', (req, res) => {
    console.log(req.user);
    res.send({
        status: 200,
        msg: '获取成功',
        data: req.user
    })
})

// 捕获解析 jwt 失败导致的错误
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 400,
            msg: '无效的token'
        })
    }
    res.send({
        status: 500,
        msg: '未知错误'
    })
})


app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1');
})