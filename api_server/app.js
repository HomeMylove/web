// 导入 express 模块
const express = require('express')

// 创建服务器的实例对象
const app = express()

const joi = require('joi')

// 导入 cors 模块,配置中间件解决跨域问题
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
// 只能解析 x-www 的表单数据
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
        console.log(req.body);
        next()
    })
    // 封装 res.cc() 函数
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        // status 的值 默认为 1
        // err 可能是一个错误对象，也可能是描述字符串
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 在注册路由之前 配置 解析 Token的 中间件
const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/] }))
    // 解析成功则 在 req 对象上挂载 user 属性, user 身上包含 加密的所有属性

app.use('/api', express.static('../BIG'))
    // 导入并使用 用户路由 模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 导入并使用 用户信息 模块
const userinfoRouter = require('./router/userinfo')
app.use('/my', userinfoRouter)

app.get('/', (req, res) => {
    res.cc('hello', req.user)
})

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) {
        // 验证失败的错误
        return res.cc(err)
    }
    if (err.name === 'UnauthorizedError') {
        return res.cc('身份认证失败')
    }
    res.cc(err)
})



// 启动服务器
app.listen(80, () => {
    console.log('api server is running at http://127.0.0.1');
})