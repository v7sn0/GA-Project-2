const User = require("../models/User.js")
const Review = require("../models/Review.js")

const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const review = await Review.find({ reviewer: user._id })
    const data = {
      _id: user._id,
      firstName: user.first,
      lastName: user.last,
      reviews: review,
    }
    res.render("../views/users/profile.ejs", { user: data })
  } catch (error) {
    res.send("An error occured when finding User.")
  }
}

module.exports = {
  showProfile,
}
