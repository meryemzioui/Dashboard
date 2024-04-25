const express = require('express')
const router = express.Router()
const authController=require('../controllers/authController')
const {imageUpload}=require('../middlewares/upload')

router.post("/register",imageUpload,authController.register)
router.post("/login",authController.login)


module.exports = router;