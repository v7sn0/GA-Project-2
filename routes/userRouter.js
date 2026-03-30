const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController.js")

// router.post("/signup", userController.signUpController)
// router.get("/signin", userController.signInController)
router.get("/:id", userController.showProfile)
module.exports = router
