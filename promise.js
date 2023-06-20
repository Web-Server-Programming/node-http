const { readFile} = require('fs')

console.log('start')

const getFileData = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(error,data)=>{
            if(error)
            {
                reject(error)
            }
            resolve(data)
        })
    })
   
}

getFileData('./FSModules/firstFile.txt')
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))

