const mongoose = require("mongoose");
const studShema = new mongoose.Schema({
  filiere: {
    type: Number,
  },
  classe: {
    type: Number,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  datedenaissance: {
    type: Date,
    
  },
  note: {
    type: Number,
    
  },
},

);

module.exports = mongoose.model("stud", studShema);