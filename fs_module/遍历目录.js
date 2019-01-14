//引入文件系统模块
const fs = require("fs");
//引入路径模块
const path = require("path");
//创建获取文件目录方法
let getFilesInDir = function (dir) {
    //将传递的路径转化为绝对路径保存在数组里面
  let results = [path.resolve(dir)];
  //读取传递进来的目录
  let files = fs.readdirSync(dir,"utf-8");
  files.forEach(function (file) {
      file = path.resolve(dir,file);
      let stats = fs.statSync(file);
      if(stats.isFile()){
          results.push(file);
      }else if(stats.isDirectory()){
           results = results.concat(getFilesInDir(file));
      }
      return results;
  });
};

let files = getFilesInDir("./");