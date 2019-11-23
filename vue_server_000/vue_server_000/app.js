//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)

var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"app",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
var path = require('path');
var bodyParser = require('body-parser');//用于req.body获取值的
server.use(bodyParser.json());
// 创建 application/x-www-form-urlencoded 编码解析
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:3001","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT id FROM app_login WHERE uname = ? AND upwd = ?";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   //5.1:保存用户id在session对象中
   //result数据格式 [{id:1}]
  req.session.uid = result[0].id;
  res.send({code:1,msg:"登录成功"});
  console.log(req.session.uid)
 }
 //(6)将结果返回脚手架
})
})
//注册模块
server.post('/register',function(req,res){
  var $uname=req.body.runame;
  var $upwd=req.body.rupwd;
  var sql="insert into app_login set ? ";
  pool.query(sql,[{uname:$uname,upwd:$upwd}],function(err,result){
    if(result.affectedRows>0){
      res.send("1");
    }else{
      res.send("0")
    }
  })
})




//#检测   16:00
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:4000/login?uname=tom&upwd=123
//   http://127.0.0.:4000/login?uname=tom&upwd=122   
//app.js 复9~73   



//功能二:分页显示商品列表
//1:接收GET /product 
server.get("/product",(req,res)=>{
//2:接收二个参数 
//  pno 页码 pagePageSize 页大小
var pno = req.query.pno;
var ps = req.query.pageSize;
//3:设置默认值 pno=1 pageSize=4
if(!pno){pno=1}
if(!ps){ps=12}
//4:计算第一问号值
var off = (pno-1)*ps;
//5:对pageSize转int
ps = parseInt(ps); 
//6:创建sql语句
//自己写:库名;表名;列名 小写
var sql = "SELECT id,pname,price,details,img_url FROM app_laptop LIMIT ?,?";
//7:执行sql语句
pool.query(sql,[off,ps],(err,result)=>{
  if(err)throw err;
  res.send({code:1,msg:"查询成功",data:result})
})
//8:将返回结果发送脚手架 
})
//检测 83~104 复制 你app.js重新
//启动 node app.js
//http://127.0.0.1:4000/product
//http://127.0.0.1:4000/product?pno=2



//用户展示模块
server.get("/show",(req,res)=>{
  //2:接收二个参数 
  //  pno 页码 pagePageSize 页大小
  var pno = req.query.pno;
  var ps = req.query.pageSize;
  //3:设置默认值 pno=1 pageSize=4
  if(!pno){pno=1}
  if(!ps){ps=12}
  //4:计算第一问号值
  var off = (pno-1)*ps;
  //5:对pageSize转int
  ps = parseInt(ps); 
  //6:创建sql语句
  //自己写:库名;表名;列名 小写
  var sql = "SELECT id,uname,details,img_url FROM app_show LIMIT ?,?";
  //7:执行sql语句
  pool.query(sql,[off,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
  })
  //8:将返回结果发送脚手架 
  })
  //检测 83~104 复制 你app.js重新
  //启动 node app.js
  //http://127.0.0.1:4000/show
  //http://127.0.0.1:4000/show?pno=2
  


  //商品详情模块
  server.get("/details",(req,res)=>{
    //1.接受参数id
    var id=req.query.id;
    //2.创建sql语句
    var sql="select* from app_laptop where id=?;"
    //3.执行sql语句
    pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:"查询成功",data:result})
    })
  })