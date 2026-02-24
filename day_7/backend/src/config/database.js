const mongoose = require("mongoose");

function coonectTodb() {
  mongoose.connect(process.env.MONG0_URI).then(() => {
    console.log("Connected To db");
  });
}

module.exports = coonectTodb;