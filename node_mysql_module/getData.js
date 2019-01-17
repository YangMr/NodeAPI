//引入http模块
const http = require("http");
//创建http服务器
http.createServer(function (request,response) {
    //设置跨域
    response.setHeader("Access-Control-Access-Origin","*");
    //设置字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    //
}).listen(8888);