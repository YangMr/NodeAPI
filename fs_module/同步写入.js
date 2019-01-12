//引入文件系统操作模块
const fs = require("fs");
//在写入数据的时候,如果文件不存在,则创建文件,如果文件的内容存在,在覆盖文件的内容
try{
    fs.writeFileSync("./write.txt","i like node js","utf-8");
    console.log("文件写入成功");
}catch(error){
    console.log(`写入错误: ${error.message}`)
}

