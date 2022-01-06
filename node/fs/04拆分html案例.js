const fs = require("fs");
const path = require("path");

// 正则
const regStyle = /<style>[\s\S]*<\/style>/
const regJs = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, "./fangda.html"), "utf8", (err, dataStr) => {
    // 失败
    if (err) return console.log("文件打开失败" + err.message);
    // 成功
    // console.log(dataStr);
    resoveCSS(dataStr);
    resoveJS(dataStr);
    resoveHTML(dataStr);
})

function resoveCSS(dataStr) {
    const css = regStyle.exec(dataStr);
    // console.log(css);
    const newCSS = css[0].replace("<style>", "").replace("</style>", "");
    // console.log(newCSS);
    fs.writeFile(path.join(__dirname, "./FDJ/index.css"), newCSS, err => {
        if (err) return console.log("css写入失败" + err.message);
    })
}

function resoveJS(dataStr) {
    const js = regJs.exec(dataStr);
    // console.log(css);
    const newJS = js[0].replace("<script>", "").replace("</script>", "");
    // console.log(newCSS);
    fs.writeFile(path.join(__dirname, "./FDJ/index.js"), newJS, err => {
        if (err) return console.log("js写入失败" + err.message);
    })
}

function resoveHTML(dataStr) {
    const newHTML = dataStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
        .replace(regJs, '<script src="./index.js"></script>');
    // console.log(newHTML);
    fs.writeFile(path.join(__dirname, "./FDJ/index.html"), newHTML, err => {
        if (err) return console.log("写入HTML失败" + err.message);
    })
}