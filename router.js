//引入框架
const express = require('express')
//创建路由对象
let router = express.Router()
//引入控制器模块
let heroCtrl = require('./controller')
//路由分发
 router.get('/',(req,res)=>{
  heroCtrl.showIndexPage(req,res)
 }) 
 .get('/add',(req,res)=>{
    heroCtrl.showAddPage(req,res)
}) 
.get('/edit',(req,res)=>{
    heroCtrl.showEditPage(req,res)
})  
.get('/info',(req,res)=>{
    heroCtrl.showInfoPage(req,res)
}) 
//暴露路由
module.exports = router  