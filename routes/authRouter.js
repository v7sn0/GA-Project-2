const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController.js")

router.get("/signup", (req, res) => {
  res.render("../views/auth/signup.ejs")
})

router.post("/signup", authController.signUpController)
router.post("/signin", authController.signInController)

module.exports = router
