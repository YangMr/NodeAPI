//引入文件系统模块
const fs = require("fs");
fs.mkdir("./异步创建目录",function (error) {
    if(error){
        console.log(`错误信息: ${error.message}`);
    }
    console.log("目录创建成功");
});