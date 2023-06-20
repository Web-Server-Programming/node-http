const http = require('http')
// const dateModule = require('./myDateModule')
const event = require('event')

http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/html"})
    
    // response.write("hello world\n")
    // response.write(dateModule.currentDateTime())
    response.end()
}).listen(4500)