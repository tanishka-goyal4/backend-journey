/* 
server ko create krna
server ko config karna
 */

const express = require("express")

const app = express()
// server ko call kiya

const noteModel = require("./models/notes.models")

app.use(express.json());

module.exports = app


/* 
post /notes
req.body => { title, description } 
*/

app.post("/notes", async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })
    
    res.status(201).json({
        message: "Note created successfully",
        note
    })

})

app.get("/notes",async (req, res)=>{

    const note = await noteModel.find()

    res.status(200).json({
        message: "Note fetched successfully",
        note
    })
})
