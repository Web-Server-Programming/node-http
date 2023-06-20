const http = require('http')
const fs = require('fs')

http.createServer((request,response)=>{


    // response.writeHead(200,{'contentType':'index/html'})
    // response.end()

    fs.readFile('index.html',(err, data)=>{
        response.writeHead(200,{'contentType':'text/plain'})
        response.write(data)
        response.end() 
    })



}).listen(8001)