const express = require("express")
const app = express()
const port = 3002
const bodyParser = require("body-parser")

// app.use(express.json())
app.use(bodyParser.json())
app.post('/conversations',function(req,res){
    // console.log(req.headers["authorization"])
    console.log(req.body)
    res.send({
        msg:"2 + 2 = 4"
    })
})
app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})