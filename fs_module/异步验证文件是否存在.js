//引入文件系统模块
const fs = require("fs");
fs.access("./write3.txt",function (error) {
    if(error){
        throw error;
    }
    console.log("文件存在")
});