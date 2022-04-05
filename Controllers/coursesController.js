const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const { isObjectIdOrHexString } = require("../db/connection");

const Course = require("../Models/mvpCourseSchema");
// const User = require("../models/userSchema");

// @desc Get Courses
// @route GET /api/v1/courses
// @access Private
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({ owner: req.user.id });

  res.status(200).json(courses);
});

// @desc Get all available Courses
// @route GET /api/v1/courses/all //  adding all here for test
// @access Private
const getAllCourses = asyncHandler(async (req, res) => {
  const allCourses = await Course.find();

  res.status(200).json(allCourses);
});

// @desc Add a course
// @route POST /api/v1/courses
// @access Private
const addCourse = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please complete the form and try again.");
  }

  console.log(req.body);

  const newCourse = {
    ...req.body,
    _id: new mongoose.Types.ObjectId(), //remove if it doesn't work
    owner: req.user.id,
    // { new: true },
  };

  console.log(newCourse);

  // const createdCourse = await Course.create(newCourse).select("-_id");
  const createdCourse = await Course.create(newCourse);

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
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};
