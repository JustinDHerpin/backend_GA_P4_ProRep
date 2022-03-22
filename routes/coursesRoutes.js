const express = require('express')
const router = express.Router()
const {getCourses, addCourse, updateCourse, deleteCourse} = require('../controllers/coursesController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getCourses)

router.post('/', protect, addCourse)


//Needs to be where courses/:id mongoose search for req.params.username retrieve 
router.put('/:id', protect, updateCourse)

router.delete('/:id', protect, deleteCourse)

module.exports = router