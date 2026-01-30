const express = require("express")

const app = express()

const notes = []

app.use(express.json())

app.post ('/notes',(req, res)=>{
    notes.push(req.body)
    res.send("note created")
    console.log(req.body);
})

app.get('/notes', (req,res)=>{
    res.json(notes)
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
