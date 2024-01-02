const express = require("express");
const app = express();

// Challenge: create a todo app that lets users store todos on the server.
app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(3000);