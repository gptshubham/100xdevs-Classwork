/*
// Loops
// sum from 1 to 100
let sum = 0;
for(let i=0;i<=100;i++){
    sum += i;
}
console.log(sum);
*/
/*
// Functions
// mathSum function
function findSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
const ans = findSum(100);
console.log(ans);
*/
// Callback Function
// find the sqare of two numbers
function findSquare(n){
    const ans = n * n;
    return ans;
}
// console.log(findSquare(10));
// One function calling another function
function sumSquare(a,b){
    const value1 = findSquare(a);
    const value2 = findSquare(b);
    return value1 + value2;
}
const value = sumSquare(10,20);
// console.log(value);
function findCube(n){
    const value = n*n*n;
    return value;
}
// Callback Function
function sumOf(a,b,Callback){
    console.log(a);
    console.log(b);
    console.log(Callback);
    const val1 = Callback(a);
    const val2 = Callback(b);
    return val1 + val2;
}
const val = sumOf(10,20,findSquare);
console.log(val);
const ans = sumOf(2,3,findCube)
console.log(ans);