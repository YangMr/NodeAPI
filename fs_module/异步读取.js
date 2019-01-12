/*异步读取*/
//引入文件系统操作模块
const fs = require("fs");
fs.readFile("file.txt","utf-8",function (error,data) {
    if(error){
        console.log("读取文件出错:" + error.message);
    }
    console.log("文件数据的内容为:" + data);
});


