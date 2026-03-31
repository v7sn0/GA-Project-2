const Phone = require("../models/Phone.js")
const Review = require("../models/Review.js")
const User = require("../models/User.js")

const populatePhoneField = async (req, res) => {
  try {
    const phones = await Phone.find({})
    res.render("./reviews/newReview.ejs", { phones })
  } catch (error) {
    res.send("An error occured when populating the phone field.")
  }
}

const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    console.log(review._id)
    res.redirect(`/review/${review._id}`)
  } catch (error) {
    res.send("An error occured when creating a review." + error)
  }
}

const showSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("reviewer")
    res.render("../views/reviews/showSingleReview.ejs", { review })
  } catch (error) {
    res.send("An error occured when finding ID review.")
  }
}
const reviewAll = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate("reviewer")
    console.log(reviews)

    res.render("./reviews/allReviews.ejs", { reviews })
  } catch (error) {
    res.send("An error occured when finding reviews.")
  }
}

const editReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body)
    res.send(review)
  } catch (error) {
    res.send("An error occured when editing review.")
  }
}

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id)
    res.send(review)
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
  populatePhoneField,
}
