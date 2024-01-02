const express = require("express");
const app = express();

app.get("/route-handler",(req,res)=>{
    res.json({
        name: "shubham",
        age: 22,
        gender: "male"
    })
})

app.listen(3002);