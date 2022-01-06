const express = require('express')
const router = express.Router()

// 导入 用户路由处理函数 模块
const userHandler = require('../router_handler/user')

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/user')

// 注册新用户
router.post('/reguser', expressJoi(reg_login_schema), userHandler.regUser)

// 登录
router.post('/login', expressJoi(reg_login_schema), userHandler.login)


module.exports = router