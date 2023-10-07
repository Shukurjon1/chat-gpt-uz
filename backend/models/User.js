const Mongoose = require("mongoose")

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  photo: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  ip: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: false,
  }, 
})

module.exports = Mongoose.model("user", UserSchema)