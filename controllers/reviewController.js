const Phone = require("../models/Phone.js")
const Review = require("../models/Review.js")
const User = require("../models/User.js")

const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.redirect(`/review/${review._id}`)
  } catch (error) {
    res.send("An error occured when creating a review.")
  }
}
const showSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("reviewer")
    const phone = await Phone.findById(review.phone)
    res.render("../views/reviews/showSingleReview.ejs", { review, phone })
  } catch (error) {
    res.send("An error occured when finding ID review.")
  }
}
const reviewAll = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate("reviewer")
    const phone = await Phone.find({})
    console.log(phone)
    console.log(reviews)

    res.render("./reviews/allReviews.ejs", { reviews })
  } catch (error) {
    res.send("An error occured when finding reviews.")
  }
}

const editReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    })
    res.redirect(`/review/${review._id}`)
  } catch (error) {
    res.send("An error occured when editing review.")
  }
}

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id)
    res.redirect("/review/allReviews")
  } catch (error) {
    res.send("An error occured when deleting a review.")
  }
}

module.exports = {
  addReview,
  showSingleReview,
  reviewAll,
  editReview,
  deleteReview,
}
