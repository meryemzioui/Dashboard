const express = require("express");
const router = express.Router();
const createStudentController = require("../controllers/createStudentController");


router.post("/", createStudentController.createStud);
router.get("/", createStudentController.readStud);

module.exports = router;