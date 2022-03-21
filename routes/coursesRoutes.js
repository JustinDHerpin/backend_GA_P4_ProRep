const express = require('express')
const router = express.Router()
const {getCourses, addCourse, updateCourse, deleteCourse} = require('../Controllers/coursesController')


router.get('/', getCourses)

router.post('/', addCourse)


//Needs to be where courses/:id mongoose search for req.params.username retrieve 
router.put('/:id', updateCourse)

router.delete('/:id', deleteCourse)

module.exports = router