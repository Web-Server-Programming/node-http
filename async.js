const { readFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)

console.log('start')

// const getFileData = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(error,data)=>{
//             if(error)
//             {
//                 reject(error)
//             }
//             resolve(data)
//         })
//     })
   
// }

const start = async() =>{
    try{
        const fileData = await  readFile('./FSModules/firstFile.txt','utf-8')
        console.log(fileData)
    }
    catch (error){
        console.log(error)
    }
}

start()


// .then(resolve => console.log(resolve))
// .catch(reject => console.log(reject))

