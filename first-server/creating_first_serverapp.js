const http=require("http")
const fs=require('fs')
const port=3000
// creating server instance, every instance has a call back function consisting of request and response
// for sending a response to a server we use res.write.
const server=http.createServer((req,res)=>{
    res.write("first server")
    res.end()
  
});
// Server is listening at port number 3000
server.listen(port,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("listening")
    }

})