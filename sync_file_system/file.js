const fs=require("fs")
// this will create a file if that file doesn't exist
// if that file already exist then it will replace all the content with the new content
fs.writeFileSync("info.txt","hey i am rohan, i m 21 year old a full stack developer")

// appending new content inside file
// fs.appendFileSync('info.txt',"i love to do coding and explore new tech stacks")
//
// this will return the data in buffer 
 const buffer_data=fs.readFileSync('info.txt')
 console.log(buffer_data)
 // to convert the data into normal string using toString()
 const normaldata=fs.readFileSync("info.txt").toString()
 console.log(normaldata)
// rename
fs.renameSync("info.txt","new_info.txt")// changed the file name from info.txt to new_info.txt
