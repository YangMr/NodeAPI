//引入文件系统模块
const fs = require("fs");
//使用同步方式删除目录
try{
    fs.rmdirSync("./b");
    console.log("目录删除成功");
}catch (error) {
    throw error.message;
}