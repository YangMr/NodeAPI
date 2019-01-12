//引入文件系统模块
const fs = require("fs");
let writeStream = fs.createWriteStream("./write3.txt","utf-8");
writeStream.on("close",function(){
    console.log("已经关闭");
});
writeStream.write("hello");
writeStream.write("node js");
writeStream.end("");