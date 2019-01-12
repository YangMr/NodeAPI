const fs = require("fs");
try{
    fs.unlinkSync("./write2.txt")
    console.log("删除成功");
}catch (error) {
    console.log(error.message)
}