const mongoose = require('../db/connection')
// const User = require('./user')

const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    
    // students: [{ type: String, required: true}], // click on course add to their array?
    homeworks: [{ type: String }],

    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    // },

    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',                            // should this be 'Lesson' ???  give lesson id here
    },
    
}, { timestamps: true })
    

const User = mongoose.model('User', userSchema)
module.exports = User