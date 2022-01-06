// 导入定义验证规则的包
const joi = require('joi')

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义 id nickname email 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

// 定义 avater 的验证规则
const avater = joi.string().dataUri().required()
    // 检测是否为 base64 格式


// 定义验证注册和登录表单数据规则的对象
module.exports.reg_login_schema = {
    body: {
        username,
        password,
    }
}
module.exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
    }
}
module.exports.update_password_schema = {
    body: {
        oldPwd: password,
        // 验证新密码的规则
        // 1. joi.ref('oldPwd') 表示两个值一致
        // 2. joi.not(joi.ref('oldPwd')) 表示不能一致
        // 3. .concat(password) 用于合并规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}
module.exports.update_avater_schema = {
    body: {
        avater
    }
}