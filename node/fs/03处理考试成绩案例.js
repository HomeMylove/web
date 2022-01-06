const fs = require("fs");
const path = require("path");



fs.readFile(path.join(__dirname, "./files/score.txt"), "utf8", (err, dataStr) => {
    // 失败
    if (err) return console.log("读取文件失败" + err.message);
    // 成功
    console.log("读取文件成功\r\n" + dataStr);
    // 用空格分隔
    const arrOld = dataStr.split(" ");

    const arrNew = [];
    arrOld.forEach(item => {
        arrNew.push(item.replace("=", ":"));
    })
    const strNew = arrNew.join("\r\n");
    fs.writeFile(path.join(__dirname, "./files/NewScore.txt"), strNew, (err) => {
        if (err) return console.log("文件写入成功" + err.message);
    })
})