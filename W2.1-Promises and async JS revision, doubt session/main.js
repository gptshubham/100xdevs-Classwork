// callbacks
/*
function square(n){
    const ans = n*n;
    return ans;
}
function cube(n){
    const ans = n*n*n;
    return ans;
}
// generic
function sumOfSomething(n1,n2,callback){
    let a = callback(n1);
    let b = callback(n2);
    return a+b;
}

const value = sumOfSomething(2,3,cube);
console.log(value);
*/
// Async Functions
/*
function onDone(content){
    console.log(content);
}
readFile("a.txt",onDone); // async call
console.log("Hi there!");
*/
/*
// setTimeout()
function onDone(){
    console.log("Hi there !");
}
setTimeout(onDone,1000);
console.log("after setTimeout....")
*/
let a = 1;
console.log(a);
const fs = require("fs");
fs.readFile("a.txt","utf8",function(err,data){
    console.log("the data read in the file is : ");
    console.log(data);
})
let ans = 0;
for(let i=0;i<=1000000000;i++){
    ans += i;
}
console.log(ans);