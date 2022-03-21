const mongoose = require('../db/connection')
// const User = require('./user')

const courseSchema = new mongoose.Schema({

    name: { type: String, required: true }, // Javascript
    // lessons: [{ type: String, required: true}], // moved links to lesson schema 
    // homeworks: [{ type: String }],              // moved to hw schema

    students: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',                               // all students enrolled in this course...can query for courses "contains" or "includes this student id"
    }],                                            // click on course add to their array?  course.students will return array of all students in the course

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',                               // owner/creater of the course w/edit rights
    },

}, { timestamps: true })
    

const Course = mongoose.model('Course', courseSchema)
module.exports = Course