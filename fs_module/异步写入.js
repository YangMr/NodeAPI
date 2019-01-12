//引入文件系统模块
const fs = require("fs");
//异步写入
fs.writeFile("write2.txt","hello node js","utf-8",function (error) {
    if(error){
        console.log(`写入失败: ${error.message}`);
    }
    console.log("写入成功");
});