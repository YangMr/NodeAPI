//引入文件系统模块
const fs = require("fs");
//如果目录存在,会报错
try{
    fs.mkdirSync("同步创建的目录");
    console.log("目录创建成功");
}catch (error) {
    console.log(`错误信息: ${error}`)
}
