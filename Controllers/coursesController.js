const asyncHandler = require('express-async-handler')

const Course = require('../Models/courseSchema')

// @desc Get Courses
// @route GET /api/v1/courses
// @access Private

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find()

    // res.status(200).json({message: 'Get Courses'})
    res.status(200).json(courses)
})



// @desc Add a course
// @route POST /api/v1/courses
// @access Private

const addCourse = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400)
        throw new Error('Please complete the form and try again.')
    }

    const newCourse = ({
       ...req.body,
    })

    console.log(req.body.name)
    console.log(newCourse)

    const createdCourse = await Course.create(
        newCourse,
    )
    
    // res.status(201).json({message: `New Course Successfully Added: ${req.params.id}`})
    res.status(201).json(createdCourse)
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