const num = [12,25,47,18,66,9];
console.log(num);
const transformation = (a)=>{
    return a*a;
}

const map = (array,callback)=>{
    const arr = array;
    newArr = [];
    for(i of arr){
        newArr.push(callback(i));
    }
    return newArr;
}

const newNum = map(num,transformation);
console.log(newNum);