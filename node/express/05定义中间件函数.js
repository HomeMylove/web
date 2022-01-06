const express = require('express');
const app = express()

// 定义一个最简单的中间件
const mw = function(req, res, next) {
    console.log('这是全局生效的中间件');

    // 把流转关系转交给下一个中间件
    next()
}

// 这里要定义一个局部生效的中间件
const mw1 = function(req, res, next) {
    console.log('这是局部生效的中间件mw1');
    next()
}
const mw2 = function(req, res, next) {
    console.log('这是局部生效的中间件mw2');
    next()
}




// 将 mw 注册为全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
    res.send('home page')
})

// 局部的中间件直接写到路由里
app.get('/user', mw1, (req, res) => {
    res.send('user page');
})

// 可以调用多个中间件
// app.get('/username', [mw1, mw2], (req, res) => {
app.get('/username', mw1, mw2, (req, res) => {
    console.log('show username');
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})