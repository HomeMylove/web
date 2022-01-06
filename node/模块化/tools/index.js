// 这是包的入口文件
const date = require("./src/dateFormat")
const escape = require("./src/htmlEscape")


// 暴露出去
module.exports = {
    ...date,
    ...escape
}