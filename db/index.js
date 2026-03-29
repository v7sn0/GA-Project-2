const mongoose = require("mongoose")

const connect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI)
    mongoose.connection.on("connected", () => {
      console.log("Mongoose db connected")
    })
  } catch (error) {
    console.log("error connecting to mongodb")
  }
}

connect()

module.exports = mongoose
