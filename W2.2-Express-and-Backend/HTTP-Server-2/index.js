const express = require("express");
const app = express();

app.get("/", (rep,res)=>{
    res.send("Hello Shubham");
})
app.listen(3001);