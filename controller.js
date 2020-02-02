//引入model层
const heroModel = require('./model')

//业务逻辑处理
module.exports = {
    showIndexPage(req,res) {
        heroModel.getAllHeroData((err,result)=>{
            if(err) return res.json({
                 code:201, 
                 msg:'没有数据'
            })
            // console.log(result);
            res.render('index', {data:result})
        })
    }, 
    showAddPage(req,res) {
        res.render('add', {})

    },
    showEditPage(req,res) {
        res.render('edit', {})

    },
    showInfoPage(req,res) {
        res.render('info', {})

    },
    getAllHeroInfo(req,res){
        heroModel.getAllHeroData((err,result)=>{
            if(err) return res.json({
                 code:201, 
                 msg:'获取数据失败'
            })
           res.json({
               code:200,
               msg:'获取数据成功',
               data:result
           })
        })
    },
    getOneHeroInfo(req,res){
        // console.log(req.query)
        let {id} = req.query;
        heroModel.getOneHeroInfo(id,(err,result)=>{
            if(err) return res.json({
                code:201,
                msg:'英雄不存在'
            })
            res.json({
                code:200,
                msg:'获取成功',
                data:result
            })
        })
    },
    // 删除英雄数据
    deleteOneHero(req,res){ 
        let {id} = req.query
        heroModel.deleteOneHero(id,result=>{
            if(result) return res.json({
                 code:200,
                 msg:'删除成功'
            })
            res.json({
                code:201,
                msg:'删除失败'
            })
        })
    }
}