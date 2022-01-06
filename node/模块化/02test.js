const m = require('./01自定义模块');
// 导入的是module.exports 指向的对象

console.log(m);
m.sayHello()

// module.exports === exports
// 但是 require()时，永远指向 module.exports

// CommonJS规定
// 1.每个模块内，module变量代表当前模块
// 2.module变量是一个对象，它的exports属性是对外的接口
// 3.加载某个模块，就是加载module.exports属性