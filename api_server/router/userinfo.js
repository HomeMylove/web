const express = require('express')
const router = express.Router()

// 导入路由处理函数模块
const userinfoHandler = require('../router_handler/userinfo')

// 导入验证数据中间件
const expressJoi = require('@escook/express-joi')
const { update_userinfo_schema, update_password_schema, update_avater_schema } = require('../schema/user')


// 获取用户基本信息的路由
router.get('/userinfo', userinfoHandler.getUserinfo)

// 更新用户基本信息的路由
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfoHandler.updateUserinfo)

// 修改密码的路由
router.post('/updatepwd', expressJoi(update_password_schema), userinfoHandler.updatePassword)

// 更新用户头像的处理函数
router.post('/update/avater', expressJoi(update_avater_schema), userinfoHandler.updateAvater)
module.exports = router