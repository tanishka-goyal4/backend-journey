/* 
server create karna 
server ko config karna
 */

const express = require("express");
const noteModel = require("./model/note.model");
const app = express();

app.use(express.json());

/* 
post /api/notes
create new note and save data in mongodb
const { title, description } = req.body;

*/
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Note created successfully.",
    note,
  });
});

/* 
Get /api/notes
-Fatch the all notes data from the mongodb and send them in the response
 */
app.get("/api/notes", async (req, res) => {
  const note = await noteModel.find();

  res.status(200).json({
    message: "Note fetched successfully.",
    note,
  });
});

/* 
delete method notes api 
used to delete a note by id 
 */

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  console.log(id);

  res.status(200).json({
    message: " Note deleted successfully.",
  });
});

/* 
patch/notes:id
update the description of note by id
const {description}= req.body */
app.patch("api/notes:id", async (req, res)=>{

  const id = req.params.id;
  const {description} = req.body;


  await noteModel.findByIdAndUpdate(id,{description})

  res.status(200).json({
    messsage: " Note updated successfully."
  })
})


module.exports = app;

