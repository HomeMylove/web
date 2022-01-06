const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    let url = req.url;
    console.log(url);
    url = url === "/" ? "index.html" : url;

    fs.readFile(path.join(__dirname, "../fs/FDJ/", url), "utf8", (err, dataStr) => {
        if (err) return res.end("<h1>404 NOT FOUND</h1>");
        console.log("打开成功");
        content = dataStr;
        // res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(content);
    })

})

server.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
})