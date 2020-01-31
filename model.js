//model处理数据库
const mysql = require('mysql')

//创建数据库连接对象
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'wen1122yang',
    database:'wzhero',
})
//开启连接
conn.connect()
//处理数据
module.exports = {
    getAllHeroData(callback){
        //使用sql语句查询数据
        let sql = 'select * from heros'
        conn.query(sql,(err,result)=>{
            if(err) return callback(err)
            callback(null,result)
        })
    }
}
