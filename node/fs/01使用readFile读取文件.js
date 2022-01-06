// 1.导入fs模块，来操作文件
const fs = require("fs");

// 2.调用 fs.readFile()读取文件
// 参数1: 读取文件的路径
// 参数2: 读取文件的编码格式，一般默认utf8
// 参数3: 回调函数，读取成功和失败的结果 err dataStr

fs.readFile("./files/text.txt", "utf8", (err, dataStr) => {
    // 如果读取成功，err 的值为null
    // 如果读取失败,err 的值为错误对象
    if (err) return console.log("文件读取失败" + err.message);
    // 如果读取成功，dataStr为内容
    // 如果读取失败，dataStr为undifiend
    console.log("文件读取成功\r\n" + dataStr);
})