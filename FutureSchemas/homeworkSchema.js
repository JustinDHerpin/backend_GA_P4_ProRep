const mongoose = require("../db/connection");
const User = require("./user");

// check whether user is admin to update/change etc. and if user isn't admin , but is owner to view and change complet boolean on front end

const homeworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    dueDate: { type: String },
    complete: { type: Boolean },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // give user.id_ here will be owner of this "instance"
    },

    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson", // should this be 'Lesson' ???  give lesson id here
    },
  },
  { timestamps: true }
);

const Homework = mongoose.model("Homework", homeworkSchema);
module.exports = Homework;
