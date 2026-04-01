const mongoose = require("mongoose")

const phoneSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    name: { type: String, required: true },
    screenSize: { type: Number, required: true },
    batterySize: { type: Number, required: true },
    cpu: { type: String, required: true },
    memory: { type: Number, required: false },
    storage: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Phone", phoneSchema)
