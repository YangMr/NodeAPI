/*同步读取*/
//引入文件系统操作模块
const fs = require("fs");
//初识话一个变量data用来保存读取文件的数据
let data;
//使用异常捕获
try{
    //readFileSync 第一个参数为要读取的文件的地址,第二个参数为转化为utf-8字符编码格式
    data = fs.readFileSync("file.txt","utf-8");
    console.log(data);
}catch(error){
    console.log("读取文件错误:" + error.message)
}


