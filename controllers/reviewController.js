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

module.exports = {
  addReview,
}
