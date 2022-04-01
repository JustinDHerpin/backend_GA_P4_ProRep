const express = require("express");
const router = express.Router();
const {
  getCourses,
  getAllCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../Controllers/coursesController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCourses);

router.get("/all", protect, getAllCourses);

router.post("/", protect, addCourse);

//Needs to be where courses/:id mongoose search for req.params.username retrieve
router.put("/:id", protect, updateCourse);

router.delete("/:id", protect, deleteCourse);

module.exports = router;
