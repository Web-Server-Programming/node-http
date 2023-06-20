const {readFile,writeFile} = require('fs')

console.log('start 1')

readFile('./FSModules/firstFile.txt',(error,data)=>{
    if(error)
    {
        console.log(error)
    }
    const firstFile = data 
    console.log("Data assigned 1")

    writeFile('./FsModules/firstWrittenAndAsyncFile.txt', `First written async file : ${firstFile}`,(error,data)=>{
        if(error)
        {
            console.log(error);
        }
        console.log('Task completed 1')
    })
})

// console.log("End 1")


console.log('start 2')

readFile('./FSModules/firstFile.txt',(error,data)=>{
    if(error)
    {
        console.log(error)
    }
    const secondFile = data 
    console.log("Data assigned 2")

    writeFile('./FsModules/firstWrittenAndAsyncFile.txt', `First written async file : ${secondFile}`,(error,data)=>{
        if(error)
        {
            console.log(error);
        }
        console.log('Task completed 2')
    })
})

console.log("End ")

// console.log('start 3')

// readFile('./FSModules/firstFile.txt',(error,data)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     const firstFile = data 
//     console.log("Data assigned 3")

//     writeFile('./FsModules/firstWrittenAndAsyncFile.txt', `First written async file : ${firstFile}`,(error,data)=>{
//         if(error)
//         {
//             console.log(error);
//         }
//         console.log('Task completed 3')
//     })
// })

// console.log("End 3")

// console.log('start 4')

// readFile('./FSModules/firstFile.txt',(error,data)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     const firstFile = data 
//     console.log("Data assigned 4")

//     writeFile('./FsModules/firstWrittenAndAsyncFile.txt', `First written async file : ${firstFile}`,(error,data)=>{
//         if(error)
//         {
//             console.log(error);
//         }
//         console.log('Task completed 4')
//     })
// })

// console.log("End 4")


// console.log('start 5')

// readFile('./FSModules/firstFile.txt',(error,data)=>{
//     if(error)
//     {
//         console.log(error)
//     }
//     const firstFile = data 
//     console.log("Data assigned 5")

//     writeFile('./FsModules/firstWrittenAndAsyncFile.txt', `First written async file : ${firstFile}`,(error,data)=>{
//         if(error)
//         {
//             console.log(error);
//         }
//         console.log('Task completed 5')
//     })
// })

// console.log("End 5")