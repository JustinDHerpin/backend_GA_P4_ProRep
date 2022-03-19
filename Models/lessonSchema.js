// const mongoose = require('../db/connection')
// const User = require('./user')

const lessonSchema = new mongoose.Schema({

    name: { type: String, required: true },                  // Intro to JS
    lessonLink: [{ type: String, required: true}],           // 
    homeworks: [{ type: String }],                           // links to homeworks

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // should this be 'Course'???
    },

}, { timestamps: true })


const Lesson = mongoose.model('Lesson', lessonSchema)
module.exports = Lesson