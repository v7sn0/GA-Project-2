const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/reviewController.js")

router.get("/allReviews", reviewController.reviewAll)
router.post("/addReview", reviewController.addReview)
router.get("/:id", reviewController.showSingleReview)

router.put("/:id", reviewController.editReview)
router.delete("/:id", reviewController.deleteReview)
module.exports = router
