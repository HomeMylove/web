const tools = require("./tools")

const dt = new Date()

console.log(tools.dateFormat(dt));

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const htmlEs = tools.htmlEscape(htmlStr)

console.log(htmlEs);

const htmlUnEs = tools.htmlUnEscape(htmlEs)

console.log(htmlUnEs);