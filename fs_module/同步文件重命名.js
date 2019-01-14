// 引入文件系统模块
const fs = require("fs");
try{
    fs.renameSync("./write.txt","./writeFile.txt");
    console.log("重命名成功");
}catch (error) {
    throw error.message;
}