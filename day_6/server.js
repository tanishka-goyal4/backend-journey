/* server ko start karna
server ko database se connect karna
 */

require("dotenv").config()
// es line ke bina jo veriable mongo_uri in .env main bnaya hai vo acess nhi kar payenge that why ye line add karni hi hogi -- without undefined aayega


const app = require("./src/app")
const connectTodb = require("./src/config/database")
const mongoose = require("mongoose")



app.listen(3000,()=>{
    console.log("server is running on  port 3000");
})
// server ko start kiyaa

connectTodb()
