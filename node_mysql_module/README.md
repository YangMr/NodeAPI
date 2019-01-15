# Node连接MySql

## 1.安装mysql
    
下载MySQL :MySQL Downloads，并进行安装。安装完，会引导你对数据库进行配置，设置root密码以及创建普通用户以及密码。
    
## 2.安装Node-mysql
   
通过npm安装mysql的软件包，通过它方便快速调用函数连接mysql数据库。进入项目文件夹，执行`npm install mysql --save`就行了。

## 3.查看readme文档
     
进入mysql目录中，查看README文档，这步很重要，不要到处百度Google搜索怎么用，因为由于版本的不一样，也许你得到的答案并不能使你成功连接数据库。毕竟Node发展如此之快。
     
如果你认真读了README文档，接下来的步骤就不用再看了，避免由于版本不一致而误导你。

## 4.连接mysql数据库
     
进入项目文档，新建TestMysql.js示例，编写如下代码:

    const mysql   = require('mysql');
    const connection = mysql.createConnection({
     host   : 'localhost',
     user   : '数据库服务器用户名',
     password : '数据库服务器密码',
     database : '数据库用户名'
    });
     
    connection.connect();
     
    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
     if (err) throw err;
     
     console.log('The solution is: ', rows[0].solution);
    });
  
    connection.end();
 
连接基本参数
 
    host 主机名，localhost代表本地
    user Mysql用户
    password 密码
    database 连接的数据库
    client.connect()连接数据库
    
    client.query()执行SQL语句
    client.end()关闭连接。
    然后通过node TestMysql.js执行程序，确保你在执行之前已经启动了Mysql服务。
   
## 5. 增删改查
   
使用数据库无外乎增删改查，下面示例可能会对你有些帮助。 

    var mysql   = require('mysql');
    var connection = mysql.createConnection({
     host   : 'localhost',
     user   : 'me',
     password : 'secret',
     database : 'my_db'
    });
     
    connection.connect();
     
    // 增加记录
    client.query('insert into test (username ,password) values ("lupeng" , "123456")');
     
    // 删除记录
    client.query('delete from test where username = "lupeng"');
     
    // 修改记录
    client.query('update test set username = "pengloo53" where username = "lupeng"');
     
    // 查询记录
    client.query("select * from test" , function selectTable(err, rows, fields){
     if (err){
      throw err;
     }
     if (rows){
      for(var i = 0 ; i < rows.length ; i++){
       console.log("%d\t%s\t%s", rows[i].id,rows[i].username,rows[i].password);
      }
     }
    });
     
    connection.end();
 