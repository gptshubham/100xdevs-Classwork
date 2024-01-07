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

// Why we need Input Validation
const express = require("express");
const z = require("zod");
const app = express();

app.use(express.json());

const kidneyInputValidationSchema = z.array(z.number());

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyInputValidationResponse = kidneyInputValidationSchema.safeParse(kidneys);
    if(!kidneyInputValidationResponse.success){
        res.status(411).json({
            msg:"Invalid Input!"
        })
    }
    else{
        res.send({
            kidneyInputValidationResponse
        });
    }
    // const kidneysLength = kidneys.length;
    // kidneys = [1,2]
    // res.send(`Your kidney length is ${kidneysLength}`);
})

/*
// global cache
app.use((err, req, res, next)=>{
    res.json({
        msg: "Something went wrong. Please Try Again!"
    })
})
*/
app.listen(3000);