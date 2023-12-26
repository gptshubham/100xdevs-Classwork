/*
const express = require("express")
const app = express()
const port = 3000

function sumOf(n){
    let a = 0;
    for(let i=1;i<=n;i++){
        a += i;
    }
    return a;
}

app.get("/", function(req,res){
    const n = req.query.n
    const ans = sumOf(n)
    res.send(`Sum of First ${n} Natural Numbers is : ${ans}`)
})
app.listen(port);
*/
/*
// Revision : sumOf() and calculateSum()
function sumOf(n){
    let sum = 0;
    for (let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

function calculateSum(a,b){
    return a + b ;
}

const express = require("express");
const app = express();



app.get("/sumOf", function(req,res){
    const n = req.query.n;
    const ans = sumOf(n);
    res.send(ans.toString());
})

app.get("/calculateSum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = calculateSum(a,b);
    res.send(sum.toString());
})
app.listen(3000);
*/


const express = require("express");
const app = express();


var users = [{
    name: "Gyan",
    kidneys:[{
        healthy: false
    }]
}]
// console.log(users[0])
// console.log(users[0].name)
// console.log(users[0].kidneys.healthy)
// console.log(users[0].kidneys[0])
// console.log(users[0].kidneys[0].healthy)
// console.log(users[0].kidneys[1].healthy)
/*
let numberOfKidneys = 0;
for (let i=0;i<users[0].kidneys.length){
    if (users[0].kidneys.healthy == true){
        numberOfKidneys ++;
    }
    else{
        numberOfKidneys --;
    }
}
*/
app.use(express.json());

app.get("/",function(req,res) {
    const gyanKidneys = users[0].kidneys;
    console.log(gyanKidneys);
    const numberOfKidneys = gyanKidneys.length;
    console.log(numberOfKidneys);

    let numberOfHealthyKidneys = 0;
    
    for (let i=0;i<gyanKidneys.length;i++){
        if (gyanKidneys[i].healthy == true){
            numberOfHealthyKidneys ++;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
app.post("/",function(req,res) {
    // console.log(req.body) --> undefined
    // to make it defined add --> app.use(express.json());
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg:"done!"
    });
})
app.put("/",function(req,res) {
    if(atLeastOneUnhealthyKidney()){
        for (let i=0;i<users[0].kidneys.length;i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidney!"
        })
    }

})
app.delete("/", function(req,res){
    if(atLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i=0;i<users[0].kidneys.length;i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({"healthy":true});
            }
        }
        users[0].kidneys = newKidneys;
        res.json({});
    }
    else {
        res.status(411).json({
            msg: "You have no unhealthy kidney!"
        })
    }
})

function atLeastOneUnhealthyKidney (){
    let atLeastOneBadKidney = false;
    for (let i=0;i<users[0].kidneys.length;i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneBadKidney = true;
        }
    }
    return atLeastOneBadKidney;
}


app.listen(3000);