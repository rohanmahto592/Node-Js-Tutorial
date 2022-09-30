
const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
// you can't export multiple exports
//module.exports=add;
//module.exports=sub;
// to export multiple exports use module.exports.add
 module.exports.add=add;
module.exports.sub=sub;