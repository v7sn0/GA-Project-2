const User = require("../models/User.js")
const bcrypt = require("bcrypt")

const signUpController = async (req, res) => {
  try {
    //---------------------------------------------------
    if (!req.body.password === req.body.confirmPassword) {
      return res.send("wrong pass")
    }
    //----to be completed nd tested when EJS part reached
    const hashedPass = await bcrypt.hash(req.body.password, 12)

    await User.create({
      username: req.body.username,
      password: hashedPass,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })

    res.send("signed up")
    /* const user = User.create(req.body)
    res.send("signed up") */
  } catch (error) {
    res.send("Error happened during the sign up")
  }
}

const signInController = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    // console.log(user)

    // -----------------------------
    if (!user) {
      return res.send("user not found")
    }
    //--to be completed when EJS part reached

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    /* console.log(req.body.password)
    console.log(user.password) */

    if (!validPassword) {
      return res.send("wrong pass")
    }

    req.session.user = {
      email: user.username,
      _id: user._id,
    }

    req.session.save(() => {
      // res.render("../views/reviews/allReviews.ejs")
      res.redirect("/")
    })
  } catch (error) {
    res.send("Error happened during the sign in")
  }
}

const signOut = (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect("/")
    })
  } catch (error) {
    res.send("Error happened during the sign out")
  }
}

module.exports = {
  signUpController,
  signInController,
  signOut,
}
