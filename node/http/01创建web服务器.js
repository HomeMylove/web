// 导入http模块
const http = require("http");
// 创建web服务器实例
const server = http.createServer();
// 绑定request事件
server.on("request", (req, res) => {
    console.log("Some visited our web server");
    // const str = `Your request url is ${req.url},and request method is ${req.method}.`
    const str = `你请求的url是 ${req.url},请求方法是 ${req.method}.`
        // 解决中文乱码
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log(str);
    res.end(str);
})

// 启动
server.listen(80, () => {
    console.log("Server running at http://127.0.0.1");
})