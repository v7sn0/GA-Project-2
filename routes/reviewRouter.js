const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/reviewController.js")

router.post("/addReview", reviewController.addReview)
router.get("/", reviewController.reviewAll)
router.get("/:id", reviewController.showSingleReview)

router.put("/:id", reviewController.editReview)

module.exports = router
