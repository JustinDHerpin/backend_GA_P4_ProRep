// const mongoose = require('../db/connection')
const mongoose = require("mongoose");
// const User = require('./user')

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lessons: [
      {
        lessonName: { type: String },
        lessonLink: { type: String },
        labName: { type: String },
        labLink: { type: String },
        homeworkName: { type: String },
        homeworkLink: { type: String },
        homeworkDue: { type: String },
        homeworkDone: { type: Boolean, default: false },
        recordingLink: { type: String },
        recordingPassword: { type: String },
      },
    ],

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
