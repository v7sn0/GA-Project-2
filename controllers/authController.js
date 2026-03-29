const User = require("../models/User.js")
const bcrypt = require("bcrypt")

const signUpController = (req, res) => {
  try {
    /* if (!req.body.password === req.body.confirmPassword) {
      return res.send("wrong pass")
    }

    const hashedPass = await bcrypt.hash(req.body.password, 12)

    User.create({
      username: req.body.username,
      password: hashedPass,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }) */

    const user = User.create(req.body)
    res.send("signed up")
  } catch (error) {
    res.send("wrong")
  }
}

const signInController = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      res.send("found")
    } else {
      res.send("not found")
    }
  } catch (error) {
    res.send("wrong pass/user")
  }
}

module.exports = {
  signUpController,
  signInController,
}
