const Phone = require("../models/Phone.js")
const Review = require("../models/Review.js")
const User = require("../models/User.js")

const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    res.send(review)
  } catch (error) {
    res.send("An error occured when creating a review.")
  }
}
const showSingleReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    res.send(review)
  } catch (error) {
    res.send("An error occured when finding ID review.")
  }
}
module.exports = {
  addReview,
  showSingleReview,
}
