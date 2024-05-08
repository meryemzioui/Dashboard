const stud = require("../models/stud");


exports.createStud= async (req, res) => {
  const { classe, name, datedenaissance,note } = req.body;
//   const avatar = req.image;

  const existingstud = await stud.findOne({name});
  if (existingstud) {
    return res.status(400).send("student existing");
  }
  try {
    const Stud = new stud({  classe, name, datedenaissance,note });
    await Stud.save();
    res.json({stud});
  } catch (err) {
    console.log(err);
  }
};


exports.readStud= async (req, res) => {
  
  try {
    const Stud = await Stud.find();
    res.json(stud);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



