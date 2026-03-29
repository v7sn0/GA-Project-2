const Phone = require("../models/Phone.js")
const Review = require("../models/Review.js")

const addReview = (req, res) => {
  try {
    Review.create(req.body)
    res.send("hhss")
  } catch (error) {
    res.send("Wrong")
  }
}

module.exports = {
  addReview,
}
