// const mongoose = require('../db/connection')
const mongoose = require('mongoose')
// const User = require('./user')

const courseSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    lessons: [{ type: String, required: true}],
    homeworks: [{ type: String }],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true })


const Course = mongoose.model('Course', courseSchema)
module.exports = Course