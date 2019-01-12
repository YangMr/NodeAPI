//引入文件系统模块
const fs = require("fs");
try{
    fs.accessSync("./write.txt",fs.constants.R_OK | fs.constants.W_OK);
    console.log("文件存在,并且调用进程可以读写文件");
}catch (error) {
    throw error;
}
