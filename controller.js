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
    }
}