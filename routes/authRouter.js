const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController.js")

router.get("/signup", (req, res) => {
  res.render("../views/auth/signup.ejs")
})

router.get("/signin", (req, res) => {
  res.render("../views/auth/signin.ejs")
})

router.post("/signup", authController.signUpController)
router.post("/signin", authController.signInController)
// ^^ signInController need to be changed to signIn, also the signUp

router.get("/signout", authController.signOut)

module.exports = router
