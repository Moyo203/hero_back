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
    getAllHeroData(callback){
        //使用sql语句查询数据
        let sql = 'select * from heros'
        connection.query(sql,(err,result)=>{
            if(err) return callback(err)
            callback(null,result)
        })
    }
}
