// Async Functions
/*
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    console.log(findSum(100));
  }
//   busy waiting
function syncSleep(){
    let a = 0;
    for (let i=0;i<1000000000;i++){
        a++;
    }
    console.log(a);
}
// syncSleep();
setTimeout(syncSleep, 1000)
console.log("hello world");

// fs.readFile
const fs = require("fs");
// FyleSystem Module
fs.readFile("a.txt","utf8", function(err,data){
    console.log(data);
})
console.log("hi there");
a = 0 ;
for (let i=0;i<1000000000;i++){
    a++;
}
console.log("Hi there 2");
*/

// Promises
/*
const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
  // console.log("inside kirat's read file...");
  return new Promise(function(resolve) {
    console.log("inside Promise...");
    fs.readFile("a.txt", "utf-8", function(err, data) {
      console.log("before resolve");
      resolve(data);
    });
  })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

var a = kiratsReadFile();
a.then(onDone);
*/
/*
// Promise Class
// pending, resolved, rejected
let p = new Promise(function(resolve){
  setTimeout(function(){
    resolve("foo");
  },1000)
 
});
// console.log(p);
function callback(){
  console.log(p);
}
console.log(p);
p.then(callback);
*/
// Async await
// normal syntax
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    setTimeout(function(){
      resolve("hi there!");
    },2000)
  });
  return p;
}

async function main() {
  // no callbacks, no .then syntax
  let value = await kiratsAsyncFunction();
  console.log(value);
}

main();
console.log("after main...");

setTimeout(function(){
  console.log("after main 2 ...")
} ,4000);
