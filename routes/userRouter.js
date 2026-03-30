const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController.js")

// router.post("/signup", userController.signUpController)
// router.get("/signin", userController.signInController)
//router.get("/show", userController.showReviews)
router.get("/:id", userController.showProfile)

module.exports = router
