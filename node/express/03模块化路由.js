// 在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express中的路由分3部分组成,分别是
// 请求的类型、
// 请求的 URL 地址
// 处理函数
// 格式如下
// app.METHOD(PATH,HANDLER)

const express = require('express')
const app = express()

const router = require('./04router')

app.use(router)
    // app.use() 函数的作用就是来注册全局中间件




app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})