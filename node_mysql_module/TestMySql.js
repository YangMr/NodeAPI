//引入mysql模块
const mySql = require("mysql");
//创建连接
const connection = mySql.createConnection({
    //主机地址
    host : "localhost",
    //用户名
    user     : 'root',
    //密码
    password : 'asdqwe123',
    //数据库名称
    database : 'user'
});
//连接数据库
connection.connect();

//查询数据
connection.query("SELECT * FROM user_reg",function (error,rows,result) {
    if(error){
        console.log(error);
    }
    console.log(rows);
    // console.log(result);
});

//插入数据
// connection.query('insert into user_reg (user,pass,notpass,email,ps) values ("yangling","123456","123456","759168442@qq.com","hello world")');
//

//关闭连接
connection.end();