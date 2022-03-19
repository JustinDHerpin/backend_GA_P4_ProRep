const Course = require('./Models/courseSchema')
const User = require('./Models/userSchema')
const Lesson = require('./Models/lessonSchema')
const Homework = require('./Models/homeworkSchema')

Homework.deleteMany()
    .then(() => {

        Lesson.deleteMany()
        .then(() => {
                Course.deleteMany()
                .then(() => {

                    User.deleteMany()

                        .then(() => {
                            return User.insertMany([{
                                name: "Justin Herpin",
                                email: "justindherpin@email.com",
                                password: "pw",
                                isAdmin: true,
                            }])

                            .then((users) => {
                                return Course.insertMany([{
                                    name: "JavaScript",
                                    owner: users[0]._id,
                                }])

                                .then((courses) => {
                                    return Lesson.insertMany([{
                                        name: "Intro to JS",
                                        lessonLink: "https://generalassembly.zoom.us/rec/share/rDubzpRfoDMEJ4XeKmTeDZ4CC1Om4NtsXiaGkGswd2hGb-r-aSkDAWJbbQ-cdjhO.NAnPPqM_1XVjd6bu",
                                        // homeworks: [],
                                        owner: users[0]._id,
                                    }])
                                    .then((lessons) => console.log(lessons))
                                })
                            })
                    })

                })
        })
    })
