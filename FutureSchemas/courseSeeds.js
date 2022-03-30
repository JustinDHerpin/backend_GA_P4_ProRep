// const Course = require("./Models/courseSchema");
// const User = require("./Models/userSchema");
// const Lesson = require("./Models/FutureSchemas/lessonSchema");
// const Homework = require("./Models/homeworkSchema");

// Homework.deleteMany().then(() => {
//   Lesson.deleteMany().then(() => {
//     Course.deleteMany().then(() => {
//       User.deleteMany().then(() => {
//         return User.insertMany([
//           {
//             name: "Justin Herpin",
//             email: "justindherpin@email.com",
//             password: "pw",
//             isAdmin: true,
//           },
//           {
//             name: "Billie Heidelberg",
//             email: "billie@email.com",
//             password: "pw",
//             isAdmin: true,
//           },
//           {
//             name: "Paresh Sharma",
//             email: "paresh@email.com",
//             password: "pw",
//             isAdmin: false,
//           },
//           {
//             name: "Matt Keane",
//             email: "matt@email.com",
//             password: "pw",
//             isAdmin: false,
//           },
//         ]).then((users) => {
//           return Course.insertMany([
//             {
//               name: "Command Line Interface",
//               owner: users[0]._id,
//             },
//             {
//               name: "HTML",
//               owner: users[0]._id,
//             },
//             {
//               name: "JavaScript",
//               owner: users[0]._id,
//             },
//             {
//               name: "Node.JS and Express",
//               owner: users[0]._id,
//             },
//           ]).then((courses) => {
//             return Lesson.insertMany([
//               {
//                 name: "Homework Submission with Git",
//                 lessonLink:
//                   "https://git.generalassemb.ly/Flex-929/hwSubmission",
//                 // homeworks: [],
//                 owner: users[0]._id,
//               },
//               {
//                 name: "Intro to Command Line part 1",
//                 lessonLink: "https://git.generalassemb.ly/Flex-929/cli-intro",
//                 // homeworks: [],
//                 owner: users[0]._id,
//               },
//               {
//                 name: "Intro to Command Line part 2",
//                 lessonLink: "https://git.generalassemb.ly/Flex-929/cli-intro",
//                 // homeworks: [],
//                 owner: users[0]._id,
//               },
//               {
//                 name: "Git Intro",
//                 lessonLink: "https://git.generalassemb.ly/Flex-928/git-intro",
//                 // homeworks: [],
//                 owner: users[0]._id,
//               },
//             ]).then((lessons) => console.log(lessons));
//           });
//         });
//       });
//     });
//   });
// });
