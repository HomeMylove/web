const express = require('express')

const app = express()



app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器内部发生错误')
    res.send('home page')
})

// 错误级别的中间件必须注册在所有路由之后
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send('ERROR' + err.message)
})

app.listen(80, () => {
    console.log('express running at http://127.0.0.1');
})