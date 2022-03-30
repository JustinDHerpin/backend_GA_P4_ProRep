const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a name"] },
    email: {
      type: String,
      required: [true, "Please add an email adress"],
      unique: true,
    },
    password: { type: String, required: [true, "Please enter a password"] },
    isAdmin: { type: Boolean, default: false },

    // students: [{ type: String, required: true}], // click on course add to their array?
    // homeworks: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
