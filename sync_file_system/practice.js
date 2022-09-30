const fs=require('fs')
// create a folder
fs.mkdirSync('file_folder')
// create a file inside a folder
fs.writeFileSync('file_folder/demo.txt',"hey how are you")
// append a data inside a file
fs.appendFileSync('file_folder/demo.txt',"please add me again")
// read a file 
const data=fs.readFileSync('file_folder/demo.txt').toString()
console.log(data)
// removed the file from folder using unlinkSync
fs.unlinkSync('file_folder/demo.txt')
// removed the folder using rmdirSync
fs.rmdirSync('file_folder')

