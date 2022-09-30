const fs=require('fs')
// creating a asynchronous file, all async file should have a callback function.
fs.writeFile('asyncfile.txt',"heeloo i am async",(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("file saved")
    }
})
// reading a asynchronous file , having a callback function which receive err and data in the form of buffer string .
fs.readFile('asyncfile.txt',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data.toString());// converting buffer data into string .
    }
})
// appending new string to the text.
fs.appendFile('asyncfile.txt'," hey add me please",(err)=>{
    if(err)
    {
    console.log(err)
    }
    else
    {
        console.log('added successfully')
    }
})