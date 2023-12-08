// first JS Code --> I'm lying ;)
// console.log("Hello World");
// console.log(a);

// Variables --> let,var,const
/*
var a = 1;
a = 2;
console.log(a);
*/

/*
let a = 1;
a = 2;
console.log(a);
*/
/*
const a = 1;
a = 2;
console.log(a);
*/

// Data Types --> strings,numbers,booleans
/*
let firstName = "Shubham";
let age = 22;
let isMarried = false;

console.log("My name is "+firstName+" and I'm "+age+" years' old.")
*/

// If-Else Statements
/*
let firstName = "Shubham";
let lastName = "Gupta";
let age = 22;
let isMarried = false;
if(isMarried){
    console.log(firstName+" "+lastName+" is married.")
}else{
    console.log(firstName+" "+lastName+" is not married.")
}
*/

// Loops
/*
// sum of first 1000 natural numbers
let answer = 0;
for (let i=0;i<=1000;i++){
    answer += i;
}
console.log(answer);
*/

// Array
/*
// print all the even numbers in a given array
const ages = [15,12,13,18,25,23,22,20,14,46,58,53,25];
for(let i = 0; i<ages.length; i++){
    if(ages[i]%2 === 0){
        console.log(ages[i]);
    }
}
*/
/*
//print the biggest number in an array
const ages = [15,12,13,18,25,23,22,20,14,46,58,53,25];
let max = -1;
for (let i=0;i<ages.length;i++){
    if(ages[i]>max){
        max = ages[i];
    }
}
console.log(max);
*/
/*
// Objects
const user1 = {
    firstName:"Shubham",
    gender: "Male",
    age: 22
}
console.log(user1["firstName"])
console.log(user1["gender"])
console.log(user1["age"])
*/
/*
// Array of Objects
// Write a program that prints all the male people’s first name given a complex object
const allUsers = [{
    firstName: "Shubham",
    gender: "Male",
    age: 22
},{
    firstName:"raman",
    gender:"Male",
    age:24
},{
    firstName: "priya",
    gender: "female",
    age: 23
}]
// console.log(allUsers)
for (let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="Male"){
        console.log(allUsers[i]["firstName"])
    }
}
*/

// Functions
/*
function sum(a,b){
    const sumValue = a+b;
    return sumValue;
}
// console.log(sum(2,5))
 const value = sum(2,5);
 console.log(value)
*/
/*
// Single funtion call
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}
// You are only allowed to call one function after this
// How will you displayResult of a sum
// two funtion calls of displayResult
const value = sum(2,5);
displayResult(value);

// two funtion calls of displayResultPassive
const value1 = sum(2,5);
displayResultPassive(value1);
// single funtion call of displayResult
displayResult(sum(2,5));
// single funtion call of displayResultPassive
displayResultPassive(sum(2,5));
*/

// callbacks
/*
function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}
function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const value = sum(2,5,displayResult);
const value1 = sum(2,5,displayResultPassive);
*/
/*
function calculateArithmetic(num1, num2, arithmeticFinalFunction) {
    const result = arithmeticFinalFunction(num1, num2);
    return result;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(2,5,sum);
console.log(value);

console.log(calculateArithmetic(2,5,sub));
*/

// setTimeout
function greet(){
    console.log("Hello World");
}

setTimeout(greet, 3*1000);
// it is also a callback.
// setInterval
// setInterval(greet, 1*1000);
// it is also a callback.