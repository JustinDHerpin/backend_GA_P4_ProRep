const express = require('express')
const router = express.Router()
const {getCourses} = require('../Controllers/coursesController')


router.get('/', getCourses)

router.post('/', (req, res) => {
    res.status(201).json({message: `New Course Successfully Added: ${req.params.id}`})
})


//Needs to be where courses/:id mongoose search for req.params.username retrieve 
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Course Successfully Updated: ${req.params.id} `})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Successfully Removed Course: ${req.params.id}`})
})
module.exports = router