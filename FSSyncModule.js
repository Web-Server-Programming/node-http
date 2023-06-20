const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./FSModules/firstFile.txt');
console.log(firstFile);

writeFileSync('./FsModules/firstWrittenFile.txt','This is the first written file');

writeFileSync('./FSModules/firstReadAndWrittenFile.txt',`Data from firstFile.txt : ${firstFile}`)