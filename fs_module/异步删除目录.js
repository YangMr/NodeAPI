//引入文件系统模块
const fs = require("fs");
//使用异步方式删除目录
fs.rmdir("./a",function (error) {
    if(error){
        throw error.message;
    }
    console.log("目录删除成功");
});