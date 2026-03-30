const User = require("../models/User.js")

const showProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (error) {
    res.send("An error occured when finding User.")
  }
}
module.exports = {
  showProfile,
}
