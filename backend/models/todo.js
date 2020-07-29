const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title:{
      type:String,
      required:true,
      default:"Hello World!"
  }  
});

module.exports = mongoose.model('To-Do',todoSchema)

