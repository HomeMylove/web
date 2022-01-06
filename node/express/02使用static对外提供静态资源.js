const express = require('express')

const app = express()

// 在这里，调用 express.static() 方法，快速对外提供静态资源


app.use(express.static("../../shoping"))
    // 可以托管多个
    // 不过会先查找前面的
    // 挂载前缀
app.use('/study', express.static("../../CSS/study"))

// nodemon
// 不需要重启 项目


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})