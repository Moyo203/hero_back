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
.get('/getAllHeroInfo',(req,res)=>{
  heroCtrl.getAllHeroInfo(req,res) 
}) 
// 获取一个英雄数据
.get('/getOneHero',(req,res)=>{
    heroCtrl.getOneHeroInfo(req,res)
})
// 删除一个英雄数据
.get('/deleteOneHero',(req,res)=>{
    heroCtrl.deleteOneHero(req,res)
})
// 添加英雄数据
.post('/addHeroInfo',(req,res)=>{
    heroCtrl.addHeroInfo(req,res)
})
// 编辑英雄数据
.get('/showOneHeroInfo',(req,res)=>{
    heroCtrl.showOneHeroInfo(req,res)
})
.post('/updateHeroInfo',(req,res)=>{
     heroCtrl.updateHeroInfo(req,res)
 })
//暴露路由
module.exports = router  