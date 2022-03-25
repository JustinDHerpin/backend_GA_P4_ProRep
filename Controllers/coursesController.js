const asyncHandler = require("express-async-handler");

const Course = require("../Models/courseSchema");
// const User = require("../models/userSchema");

// @desc Get Courses
// @route GET /api/v1/courses
// @access Private

const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();
  // const courses = await Course.find({ user: req.user.id })

  // res.status(200).json({message: 'Get Courses'})
  res.status(200).json(courses);
});

// @desc Add a course
// @route POST /api/v1/courses
// @access Private

const addCourse = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please complete the form and try again.");
  }

  const newCourse = {
    ...req.body,
  };

  console.log(req.body.name);
  console.log(newCourse);

  const createdCourse = await Course.create(newCourse);

  // res.status(201).json({message: `New Course Successfully Added: ${req.params.id}`})
  res.status(201).json(createdCourse);
});

// @desc Update a course
// @route PUT /api/v1/courses/:id
// @access Private

const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Course not found");
  }

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  // res.status(200).json({message: `Course Successfully Updated: ${req.params.id} `})
  res.status(200).json(updatedCourse);
});

// @desc Delete a course
// @route DELETE /api/v1/courses/:id
// @access Private

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("No course found");
  }

  await course.remove();

  // res.status(200).json({message: `Course Successfully Deleted: ${req.params.id} `})
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
