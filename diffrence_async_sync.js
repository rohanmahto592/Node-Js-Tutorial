const fs=require('fs')
//diffrence between async and sync
//----------------------------------------------
// in synchronous,, first task is completed then only next task is executed, work in sequential order
// in asynchronous, if any task is taking longer time then next task will be executed

 const data=fs.readFileSync('sync_file_system/new_info.txt')// execute first bcz it is sync
 console.log(data.toString())
 console.log('i will execute next after first')

 fs.readFile('sync_file_system/new_info.txt',(err,data)=>{// execute later bcz it is async
     console.log('i will execute later, i m async')
 })
 console.log('i will excute first')