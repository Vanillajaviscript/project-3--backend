const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    required: true
  },
  password: {
    type: String,
    required: [true, "Please enter in a password"]
  },
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema);