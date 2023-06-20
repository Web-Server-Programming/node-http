const http = require('http')
const myDate = require('./myDateModule')

http.createServer((request,response)=>{
    response.writeHead(200,{'contentType':'text/htl'})
    response.write("What the ")
    response.write(myDate.currentDateTime())
    

    response.end()
}).listen(8000)

console.log("Server starting running at http://localhost:8000")




// const events =  require('events')
// const myEventEmitter = new events.EventEmitter()


// const myEventHandler = () =>{
//     console.log('I hear a scream');
// }

// myEventEmitter.on('scream', myEventHandler)

// myEventEmitter.emit('scream')

// console.log(osModule )


