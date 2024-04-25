const mongoose = require("mongoose");
const studentsShema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  notes: [
    
  ]
  
  
});
module.exports = mongoose.model("User", userShema);