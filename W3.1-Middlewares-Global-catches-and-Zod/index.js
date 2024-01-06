/* 
// The Ugly Way
const express = require("express");
const app = express();

// app.use(express.json()); // not required in this example.
app.get("/health-checkup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const userId = req.headers.userId;
    const password = req.headers.password;
    // console.log(`You have ${kidneyId} kidneys.`);
    //do your health checks here
    // Authentication
    if(userId != "shubhamskg" && password != 123123123) {
        res.status(403).json({
            "msg":"Incorrect UserId or Password"
        })
        return;
    }
    // Input validation
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            "msg": "Invalid Input Please Enter a Valid Input !"
        })
        return;
    }
    res.send("Your Kidney is Fine!");
})
app.listen(3000);
*/

// The Nicer Way - user authentication and input validation functions --> still DRY Issue
/*
const express = require("express");
const app = express();
// user authentication function
const validUser = (userId,password)=>{
    if(userId != "shubhamskg" && password != 123123123) {
        return false;
    }
    return true;
}
// input validation function
const validKidney = (kidneyId)=>{
    if(kidneyId != 1 && kidneyId != 2) {
        return false;
    }
    return true;
}


app.get("/health-checkup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    // user Authentication
    if((!validUser(req.headers.userId,req.headers.password))) {
        res.status(403).json({
            msg:"No user found!"
        })
        return;
    }
    // Input Validation
    if(!validKidney(kidneyId)) {
        res.status(411).json({
            msg: "Incorrect Inputs!"
        })
        return;
    }
    res.send("Your Kidney is Fine!");
})
app.listen(3000);
*/
// Best Way - Middlewares