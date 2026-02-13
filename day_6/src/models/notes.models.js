const mongoose = require("mongoose")


/* 
the process is calles schema create karna and 
the formate jisse database main data store kar rhe hai that is called schema

for any operation preform on databse we need =>'models'


agar koi bhi opration perform karna hai to "model" ki need hogi hi hogi iske bina ek bhi CRUD operation perform nhi kar skte
schema to sirf formate btane ke liye hai 
*/

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

/* noteModel ke bina ek bhi note ka data na to delete hoga na hi note create hoga */

// "notes" ye collection ko represent kar rha hai - same kind of data

const noteModel = mongoose.model("notes", noteSchema)


// We need to export this noteModel in app.js so that ki hum note create kar ske => crud ka c perform kar ske = model ki need for operation 

module.exports = noteModel