const express = require('express')

// 创建服务器的实例对象
const app = express()


// 导入 cors 模块,配置中间件解决跨域问题
// const cors = require('cors')
// app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Method', '*')
    next()
})


app.get('/server', (req, res) => {
    // 设置响应头,设置允许跨域
    res.send('HELLO AJAX GET1')
})

app.post('/server', (req, res) => {
    // 设置响应头,设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('HELLO AJAX POST')
    console.log(req.body);
})

app.get('/json-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const data = {
        name: 'Ganyu',
        age: 18,
    }
    res.send(data)
})

// 延时相应
app.get('/delay', (req, res) => {
    // 设置响应头,设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        res.send('延时响应')
    }, 3000)
})

app.all('/axios-server', (req, res) => {
    const data = {
        name: 'Ganyu',
    }
    res.send(data)
})

app.all('/fetch-server', (req, res) => {
    const data = {
        name: 'Ganyu',
    }
    res.send(data)
})

// jsonp 解决跨域
app.all('/jsonp-server', (req, res) => {
    const data = {
        name: 'Ganyu',
        msg: '用户名已存在'
    }
    let str = JSON.stringify(data)
    res.send(`handle(${str})`)
})


app.listen(80, () => {
    console.log('express server is running at http://127.0.0.1');
})