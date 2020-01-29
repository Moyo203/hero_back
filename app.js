//引入express框架
const express = require('express')
//引入路由模块
let router = require('./router')
//创建服务器
const app = express()
//配置使用的模板
app.set('view engine','ejs')

//静态资源托管
app.use('/node_modules',express.static('node_modules'))
//监听窗口号
app.listen(3000,()=>{ 
    console.log('server is running at http://127.0.0.1:3000');
})
//注册中间件 use
app.use(router)