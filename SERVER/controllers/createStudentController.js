const stud = require("../models/stud");

exports.createStud = async (req, res) => {
  const {
    classe,
    name,
    datedenaissance,
    filiere,
    moyg,
    math,
    phys,
    scie,
    choix,
  } = req.body;
  //   const avatar = req.image;

  const existingstud = await stud.findOne({ name });
  if (existingstud) {
    return res.status(400).send("Student already exists");
  }

  let orient;
  if (moyg < 10) {
    orient = "non admis";
  } else if (choix === "mathematique" && (math + phys) / 2 > 13) {
    orient = "mathematique";
  } else if (choix === "scientifique" && (math + scie + phys) / 3 > 10) {
    orient = "scientifique";
  } else if (choix === "technique mathematique" && (math + phys) / 2 > 9) {
    orient = "technique mathematique";
  } else if (choix === "gestion" && math > 9) {
    orient = "gestion";
  } else {
    return res.status(400).send("Orientation does not meet requirements");
  }

  try {
    const Stud = new stud({
      classe,
      name,
      datedenaissance,
      filiere,
      moyg,
      math,
      phys,
      scie,
      choix,
      orient,
    });
    await Stud.save();
    res.json({ stud });
  } catch (err) {
    console.log(err);
  }
};

exports.readStud = async (req, res) => {
  try {
    const Stud = await stud.find();
    console.log(Stud);
    res.json(Stud);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
