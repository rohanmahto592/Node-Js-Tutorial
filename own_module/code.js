const parent=require( './module')
const {add,sub}=parent;// destructuring the function
console.log(add(4,5));
console.log(sub(10,3))