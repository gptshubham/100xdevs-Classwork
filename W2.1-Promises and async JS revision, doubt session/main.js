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
/*
// fs.readFile("fileName","utf-8",function(err,data))
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
*/

// writing our own async functions
/* 
// Approach 1 : Wrapping another async function (*callback hell)
function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration);
}

function logSomething(){
    console.log("hi there..!");
}
myOwnSetTimeout(logSomething,2000);
*/
// Approach 2 : Promises
// 1. defining asynchronous function --> 99% of the time you don't need to know how to defint them , what you really need to know is how to call them.
function myOwnSetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;
}
// function to be called back
function logFirstThing(){
    console.log("log the first thing...!");
}

// 2. Calling Asynchronous Function.

// myOwnSetTimeout(2000)
//     .then(logFirstThing);

const ans = myOwnSetTimeout(3000);
console.log(ans);
ans.then(function(){
    console.log("log the second thing...!");
});
