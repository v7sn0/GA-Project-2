const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/reviewController.js")

router.post("/addReview", reviewController.addReview)
router.get("/:id", reviewController.showSingleReview)
module.exports = router
