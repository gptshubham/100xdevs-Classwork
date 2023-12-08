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
//print the biggest number in an array
const ages = [15,12,13,18,25,23,22,20,14,46,58,53,25];
let max = -1;
for (let i=0;i<ages.length;i++){
    if(ages[i]>max){
        max = ages[i];
    }
}
console.log(max);