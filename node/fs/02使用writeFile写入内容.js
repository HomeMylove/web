const fs = require("fs");
const path = require("path");


// 参数1:文件路径
// 参数2:写入的内容
// 参数3:回调函数
fs.writeFile(path.join(__dirname, "./files/hello.txt"), "HELLO NODE.JS", (err) => {
    // 文件写入成功，err为null
    // 文件写入失败，err的值为错误对象
    if (err) return console.log("写入文件失败" + err.message);
})