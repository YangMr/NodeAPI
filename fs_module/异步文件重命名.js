//引入文件系统模块
const fs = require("fs");
fs.rename("./readFile","./readFile.txt",function (error) {
    if(error){
        console.log(error.message);
    }
    console.log("重命名成功");
});