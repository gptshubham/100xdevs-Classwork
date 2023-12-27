// arrow functions

/*
const sum = (a,b)=>{
    return a + b;
}

console.log(sum(23,27));
*/



// map

// given an array , give me back a new array in which every value is multiplied by 2;

// using for loop
const arr = [2,8,30,45,67]
/*
let arr1 = []
for(let i=0;i<arr.length;i++){
    arr1.push(arr[i] * 2);
}
console.log(arr1);
*/
// using map function
const twice = (n)=> {
    return n*2;
}
// console.log(twice(4))

// const ans = arr.map(twice);
// console.log(ans);

// Alternatively - using map funciton with callback - this is what we will do most of the times
const ans = arr.map((n)=> {
    return n*2;
});
// console.log(ans);

// Assignment : 
// create a map function that takes two inputs
// an array and a transformation callback/fn 
// and transforms the array into a new one
// using the transformation function


// filtering

// given an input array , give me all the even values from it

// using for of loop
/*
const inputArray = [5,7,13,18,24,29,33,34,48,53,57,66];
let evenArray = [];
for(i of inputArray) {
    if (i % 2 == 0){
        evenArray.push(i);
    }
}
// console.log(evenArray);
*/

// alternatively - using for in loop
/*
evenArray = [];
for(i in inputArray) {
    if (inputArray[i] % 2 == 0){
        evenArray.push(inputArray[i]);
    }
}
console.log(evenArray);
*/

// using filter function
/*
function filterLogic(n){
    if (n%2 == 0){
        return true;
    }
    else {
        return false;
    }
}
const inputArray = [5,7,13,18,24,29,33,34,48,53,57,66];
const ansArray = inputArray.filter(filterLogic);
console.log(ansArray)
*/
// altenatively using filter function with callback - this is what we do most of the times
const inputArray = [5,7,13,18,24,29,33,34,48,53,57,66];
const ansArray = inputArray.filter((n)=> {
    if (n%2 == 0){
        return true;
    }
    else {
        return false;
    }
});
console.log(ansArray)