// 1.导入 express
const express = require("express")

// 2.创建web服务器
const app = express()

// 3.启动
app.listen(80, () => {
    console.log("express server running at  http://127.0.0.1");
})

app.get('/', (req, res) => {
    console.log(req.query); //可以获取到客户端发送的查询参数
    res.send({ name: '张三', age: 20, gender: "男" })
})

app.get('/:id/:name', (req, res) => {
    console.log(req.params);
    // req.params是动态匹配的参数，默认是{}
    res.send(req.params);
})