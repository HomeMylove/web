## 安装
```
npm install tools
```
## 导入
```
const tools = require("tools")
```
## 格式化时间
```
const dtStr = tools.dateFormat(new Date)
```
## 转移html中的 特殊字符
```
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const htmlEs = tools.htmlEscape(htmlStr)
```
## 还原
```
const htmlUnEs = tools.htmlUnEscape(htmlEs)
```

## 开源协议
"ISC"