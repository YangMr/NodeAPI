const fs = require("fs");
fs.unlink("./write3.txt",function (error) {
    if(error){
        console.log(error.message)
    }
    console.log("删除成功");
});