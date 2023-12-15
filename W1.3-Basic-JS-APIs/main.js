// String Functions
/*
// .length
console.log("shubham".length);
const user = "shubham kumar gupta";
console.log(user.length);
*/
/*
// indexOf()
const user = "shubham kumar gupta";
console.log(user.length);
console.log(user.indexOf("k"));
console.log(user.indexOf("gupta"));
// lastIndexOf()
console.log(user.lastIndexOf("a"));
*/
/*
// slice()
const user = "shubham kumar gupta";
let end = user.indexOf(" ");
const firtsName = user.slice(0,end);
console.log(firtsName);
console.log(firtsName.length);

function cutStr(str,startIndex,endIndex){
    let newStr = '';
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<=endIndex){
            newStr += str[i];
        }
    }
    return newStr;
}
let start = user.indexOf(" ");
end = user.lastIndexOf(" ");
// const middleName = cutStr(user,start+1,end);
// using slice()
middleName = user.slice(start+1,end);
console.log(middleName);
start = user.lastIndexOf(" ");
end = user.lastIndexOf("a");
// const lastName = cutStr(user,start+1,end);
const lastName = user.slice(start+1,end+1);
console.log(lastName);
*/
/*
// replace()
const user = "shubham kumar gupta";
const newUser = user.replace("kumar gupta","mathur");
console.log(newUser);

console.log(user);
let target = user.slice(user.indexOf(" ")+1,user.lastIndexOf("a")+1);
let replacement = "mathur";
console.log(user.replace(target,replacement));
console.log(user);
*/
/*
// split()
const user = "shubham kumar gupta";
let userArray = user.split(" ");
// split as a better alternative of slice
const firtsName = userArray[0];
const middleName = userArray[1];
const lastName = userArray[2];
console.log(firtsName,middleName,lastName);
console.log(firtsName);
console.log(middleName);
console.log(lastName);

console.log(userArray);
const userArray1 = user.split('');
console.log(userArray1);
const userArray2 = user.split("a");
console.log(userArray2);

// join() -- It is an array function and not a string function;
const user1 = userArray1.join('');
console.log(user1);
*/
/*
// trim()
const user = "       shubham kumar gupta         ";
console.log(user);
console.log(user.length);
const userName = user.trim();
console.log(userName);
console.log(userName.length);
// toLowerCase() , toUpperCase()
const userUpper = userName.toUpperCase();
console.log(userUpper);
const userLower = userUpper.toLowerCase();
console.log(userLower);
// startsWith() endsWith()
const user1 = "Shubham Kumar Gupta";
console.log(user1.startsWith());
console.log(user1.startsWith("")); // it seems like a bug in JavaScript
console.log(user1.startsWith("S"));
console.log(user1.endsWith("a"));
*/

// Number Functions
/*
// parseInt()
let age = "84";
console.log(typeof(age));
let age1 = parseInt(age);
console.log(age);
console.log(typeof(age1));
age = 84.84
console.log(typeof(age))
age1 = parseInt(age);
console.log(age);
console.log(age1);
age = "84years";
age1 = parseInt(age);
console.log(age);
console.log(age1);
*/
/*
let age = "84.84 years";
let age1 = parseFloat(age);
// console.log(age);
// console.log(typeof(age));
// console.log(age1);
// console.log(typeof(age1));

age = 84;
age1 = parseFloat(age);
console.log(age);
console.log(typeof(age));
console.log(age1);
console.log(typeof(age1));
*/

// Array Functions
let arr = [6,7,12,20,30];
/*
// push() , pop() , shift() , unshift()
console.log(arr);
arr.push(50);
console.log(arr);
arr.pop();
console.log(arr);
arr.pop(12);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);
*/
/*
// concat()
let arr1 = ["skg","ssk","akg","sm","tr"];
let arr2 = arr.concat(arr1);
console.log(arr);
console.log(arr1);
console.log(arr2);
*/
/*
// forEach()
function logThing(str){
    console.log(str);
}
function square(str){
    console.log(str*str);
}
// arr.forEach(logThing);
arr.forEach(square);
*/

// Classes
/*
class Animal {
    constructor(name,legCount,speak,color){
        this.name = name
        this.legCount = legCount
        this.speak = speak
        this.color = color
    }
    static myType(){
        console.log('Animal');
    }
    speaks(){
        console.log(this.speak);
    }
    legs(){
        console.log(this.legCount);
    }
    colorOf(){
        console.log(this.color);
    }
}
let dog = new Animal("tommy",4,"bhow bhows","brown");
// console.log(dog);
// dog.speaks();
let cat = new Animal("pumpkin",4,"meow meows","black");
// console.log(cat);
// console.log(typeof(cat));

// cat.speaks();
// cat.colorOf();
// cat.legs();
Animal.myType();
*/

// Date Class
const currentDate = new Date();
/*
console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());

console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

// console.log(currentDate.getTime());

// biggest usecase of Date Class --> how long a process of function takes to run.
function sumOf(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

const beforeDate = new Date();
const beforeTime = beforeDate.getTime();
console.log(sumOf(1000000000));
const afterDate = new Date();
const afterTime = afterDate.getTime();
const timeTaken = afterTime - beforeTime;
console.log(timeTaken/1000);

console.log(currentDate.getDay());

console.log(currentDate);
currentDate.setFullYear(2022);
console.log(currentDate);
*/

// JSON Class
/*
const user = `{"name":"shubham","age":22,"gender":"male","ocupation":"programmer"}`;
// console.log(user["name"]);
// console.log(user);
const userObject = JSON.parse(user);
// console.log(userObject["name"]);
// console.log(userObject);
const newUser = {name:"abhi",age:28,gender:"male",occupation:"fin consultant"};
console.log(newUser);
console.log(typeof(newUser));
const newUserStr = JSON.stringify(newUser);
console.log(newUserStr);
console.log(typeof(newUserStr));
*/

// Math Class
/*
let height = 160.82;
const height1 = Math.floor(height);
console.log(height,"after applying floor : ",height1);

height = 160.22;
const height2 = Math.ceil(height);
console.log(height,"after applying ceil : ",height2);

console.log(Math.max(10,20,30,40));
console.log(Math.min(10,20,30,40));
console.log(Math.floor(Math.random()*10));

console.log(Math.pow(10,3));
console.log(Math.sqrt(121));
*/

// Object Class
const user = {name:"abhi",age:28,gender:"male",occupation:"fin consultant"};
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let hasProp = user.hasOwnProperty("name");
// console.log(hasProp);
// hasProp = user.hasOwnProperty("game");
// console.log(hasProp);

// important --> Object.assign()
const newUser = Object.assign({},user,{city:"Kolkata"});
console.log(newUser.hasOwnProperty("city"));
console.log(newUser["city"]);