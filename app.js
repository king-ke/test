var http = require('http')
var fs = require('fs')
var url = require('url')
//声名实例
var server = http.createServer()
//监听服务
  server.on("request",(req,res) => {
    var pathname = url.parse(req.url,true).pathname;
    var query = url.parse(req.url,true).query;

    if (pathname == "/index.html" && req.method == "GET") {
      fs.readFile("./index.html","utf8",(err,data) => {
        res.end(data)
      })
    }
    //接口
    else if(pathname == "/reg" && req.method == "GET"){
      var arr = ["rice","ruce","jack"]
      var yonghu = query.username
      for (let index = 0; index < arr.length; index++) {
        if(arr[index] == yonghu ){
          res.end("0")//用户已存在
          break;
        }
      }
      res.end("1") //新用户
    }
  })
//监听端口
server.listen(3000)