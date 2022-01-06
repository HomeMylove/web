const qs = require("querystring")


const bodyParser = (req, res, next) => {
    // 定义一个 str 字符串，存储客户端发来的请求体数据
    let str = ''
        // 监听 req 的 data 事件
    req.on('data', (chunk) => {
            str += chunk
        })
        // 监听 req 的 end 事件
    req.on('end', () => {
        // console.log(str);

        const body = qs.parse(str)
            // console.log(body);
        req.body = body
        next()
    })
}

module.exports = bodyParser