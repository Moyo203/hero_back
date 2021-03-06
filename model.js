//model处理数据库
const mysql = require('mysql')

//创建数据库连接对象
// let conn = mysql.createConnection({
//     host:'127.0.0.1',
//     user:'root',
//     password:'wen1122yang',
//     database:'wzhero',
//     dateStrings:true
// })
var db_config = {
    host: '127.0.0.1',
      user: 'root',
      password: 'wen1122yang',
      database: 'wzhero',
      dateStrings:true
  };

//开启连接
// conn.connect()
var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config); 
  connection.connect(function(err) {              
    if(err) {                                     
    //   console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }                                     
  });                                    
  connection.on('error', function(err) {
    // console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                     
      throw err;                               
    }
  });
}

handleDisconnect();

//处理数据
module.exports = {
  // 获取所有的英雄数据
    getAllHeroData(callback){
        //使用sql语句查询数据
        let sql = 'select * from heros'
        connection.query(sql,(err,result)=>{
            if(err) return callback(err)
            callback(null,result)
        })
    },
    // 根据id获取某个英雄的数据
    getOneHeroInfo(id,callback){
      let sql = 'select * from heros where id=?'
      connection.query(sql,[id],(err,result)=>{
        if(err) return callback(err)
        callback(null,result)
      })
    },
    //删除英雄数据
    deleteOneHero(id,callback){
      let sql = 'delete from heros where id=?'
      connection.query(sql,[id],(err,result)=>{
        if(err) return callback(false)
        callback(true)
      })
    },
    // 添加英雄数据
    addHeroInfo(hero,callback){
      let sql = 'insert into heros set ?'
      connection.query(sql,[hero],(err,result)=>{
        if(err) return callback(false)
        callback(true)
      })
    },
    // 更新英雄数据
    updateHeroInfo(hero,callback){
      let {id} = hero
      delete hero.id
      let sql = 'update heros set ? where id=?'
      connection.query(sql,[hero,id],(err,result)=>{
        if(err) return callback(false)
        callback(true)
      })
    }
}
