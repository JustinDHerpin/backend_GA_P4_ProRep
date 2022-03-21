const asyncHandler = require('express-async-handler')

// @desc Get Courses
// @route GET /api/v1/courses
// @access Private
const getCourses = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Courses'})
})

// @desc Add a course
// @route POST /api/v1/courses
// @access Private
const addCourse = asyncHandler(async (req, res) => {
    // if(!req.body.text) {
    //     res.status(400)
    //     throw new Error('Please complete the form and try again.')
    // }
    
    res.status(201).json({message: `New Course Successfully Added: ${req.params.id}`})
})

// @desc Update a course
// @route PUT /api/v1/courses/:id
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Course Successfully Updated: ${req.params.id} `})
})

// @desc Delete a course
// @route DELETE /api/v1/courses/:id
// @access Private
const deleteCourse = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Course Successfully Deleted: ${req.params.id} `})
})

module.exports = {
    getCourses,
    addCourse,
    updateCourse,
    deleteCourse
}