/*通过流来读取,一般适合读取大文件*/
//引入文件系统操作模块
const fs = require("fs");
//调用创建读取流方法,第一个参数为 读取的文件的地址, 第二个参数为字符编码
let readStream = fs.createReadStream("file.txt","utf-8");
//调用事件监听
readStream.on("data",function (chunk) {
    console.log(`读取数据${chunk}`);
}).on("error",function (err) {
    console.log(`读取错误${err.message}`)
}).on("end",function () { //没有数据了
    console.log("没有数据了,读取结束");
}).on("close",function () { //已经关闭了,不会再有事件抛出
    console.log("关闭读取");
});