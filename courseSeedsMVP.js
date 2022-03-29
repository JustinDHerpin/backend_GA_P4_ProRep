// const Course = require("./Models/courseSchema");
const User = require("./Models/userSchema");
const Lesson = require("./Models/lessonSchema");
const Homework = require("./Models/homeworkSchema");
const Course = require("./Models/mvpCourseSchema");

Course.deleteMany();

Course.addMany([
  {
    name: "Command Line Interface",

    lessons: [
      {
        lessonName: "Homework Submission with Git",
        lessonLink: "https://git.generalassemb.ly/Flex-929/hwSubmission",
        labName: "N/A",
        labLink: "N/A",
        homeworkName: "N/A",
        homeworkLink: "N/A",
        homeworkDue: "09/28/2022",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/zDHwbCQqn6JjDTBu0X16pINMyK_BW7F6T_eafvW65YCf9ekP96qO3EpqIiRgWU9R.4im_kOBS94U6W6Ml",
        recordingPassword: "wr@eW7*&",
      },
      {
        lessonName: "Intro to Command Line part 1",
        lessonLink: "https://git.generalassemb.ly/Flex-929/cli-intro",
        labName: "Command Line Lab",
        labLink: "https://git.generalassemb.ly/Flex-929/kitchen-organizer",
        homeworkName: "CLI Starwars",
        homeworkLink: "https://git.generalassemb.ly/Flex-929/hw1-cli",
        homeworkDue: "09/29/22",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/zDHwbCQqn6JjDTBu0X16pINMyK_BW7F6T_eafvW65YCf9ekP96qO3EpqIiRgWU9R.4im_kOBS94U6W6Ml",
        recordingPassword: "wr@eW7*&",
      },
      {
        lessonName: "Intro to Command Line part 2",
        lessonLink: "https://git.generalassemb.ly/Flex-929/cli-intro",
        labName: "Command Line Lab",
        labLink: "https://git.generalassemb.ly/Flex-929/kitchen-organizer",
        homeworkName: "Hippy Blog",
        homeworkLink: "https://git.generalassemb.ly/Flex-928/hippy-portfolio",
        homeworkDue: "10/02/22",
        recordingLink:
          "https://urldefense.com/v3/__https://generalassembly.zoom.us/rec/share/i6TiTVYklta_Kif8vlWzDAEgPrs5C9WRlJBcNhqPFpcK4xavNQGeMjwKetTDCT-n.VI7c5z4yvK8UzaZX__;!!GgcXpDZ2N9l6uyZJ!wPy3cYgrFuaykzmn2IEFJcxCpDU6Yd-V81blvEiC__LwYgNkagyvXP-xtNP55R8dJv8XwSxtvf3GeQ$",
        recordingPassword: "Z.%0Cb5Y",
      },
      {
        lessonName: "Git Intro",
        lessonLink: "https://git.generalassemb.ly/Flex-928/git-intro",
        labName: "N/A",
        labLink: "N/A",
        homeworkName: "N/A",
        homeworkLink: "N/A",
        homeworkDue: "N/A",
        recordingLink:
          "https://urldefense.com/v3/__https://generalassembly.zoom.us/rec/share/i6TiTVYklta_Kif8vlWzDAEgPrs5C9WRlJBcNhqPFpcK4xavNQGeMjwKetTDCT-n.VI7c5z4yvK8UzaZX__;!!GgcXpDZ2N9l6uyZJ!wPy3cYgrFuaykzmn2IEFJcxCpDU6Yd-V81blvEiC__LwYgNkagyvXP-xtNP55R8dJv8XwSxtvf3GeQ$",
        recordingPassword: "Z.%0Cb5Y",
      },
    ],
  },
  {
    name: "HTML",

    lessons: [
      {
        lessonName: "Intro to HTML",
        lessonLink:
          "https://git.generalassemb.ly/Flex-928/html-and-css/blob/master/readme.md",
        labName: "HTML/CSS Lab",
        labLink: "https://git.generalassemb.ly/Flex-928/fashion-blog",
        homeworkName: "Haiku",
        homeworkLink:
          "https://git.generalassemb.ly/Flex-928/haiku/blob/master/README.md",
        homeworkDue: "10/12/22",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/pMlBU_PMomveo47HA-WclLZHDCAYvSE3RhRvQP04zR1NjNAKE898v41Uyl-7WkYC.CiEOwVrTA8oO-oOA",
        recordingPassword: "N.Ram7xE",
      },
    ],
  },
  {
    name: "JavaScript",

    lessons: [
      {
        lessonName: "JS Data Types",
        lessonLink:
          "https://git.generalassemb.ly/Flex-928/js-data-types?organization=Flex-928&organization=Flex-928",
        labName: "N/A",
        labLink: "N/A",
        homeworkName: "Data Types Practice",
        homeworkLink:
          "https://git.generalassemb.ly/Flex-928/Data-Types-Practice?organization=Flex-928&organization=Flex-928",
        homeworkDue: "10/13/22",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/zTloX94bfzZFvaodtI28UCQgQsltVtwAHdclaBXti8LZc-y3iR9cJCB_CQq4Wg16.TlmKsFfoSumueJ-J",
        recordingPassword: "#@k3kFKf",
      },
      {
        lessonName: "JS Loops & Conditionals",
        lessonLink:
          "https://git.generalassemb.ly/Flex-928/js-control-flow?organization=Flex-928&organization=Flex-928",
        labName: "N/A",
        labLink: "N/A",
        homeworkName: "N/A",
        homeworkLink: "N/A",
        homeworkDue: "N/A",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/zTloX94bfzZFvaodtI28UCQgQsltVtwAHdclaBXti8LZc-y3iR9cJCB_CQq4Wg16.TlmKsFfoSumueJ-J",
        recordingPassword: "#@k3kFKf",
      },
      {
        lessonName: "JS Functions",
        lessonLink:
          "https://git.generalassemb.ly/Flex-928/js-functions-and-scope?organization=Flex-928&organization=Flex-928",
        labName: "JS Lab",
        labLink:
          "https://git.generalassemb.ly/Flex-928/arrays-and-iteration-lab?organization=Flex-928&organization=Flex-928",
        homeworkName: "Control Flow Practice",
        homeworkLink:
          "https://git.generalassemb.ly/Flex-928/control-flow-practice?organization=Flex-928&organization=Flex-928",
        homeworkDue: "10/17/22",
        recordingLink:
          "https://generalassembly.zoom.us/rec/share/wH73UUJcY5d-iisY45chnMpNZjViziNAwwkwAxtt9HPt_oNuqeMcfXYbaWzFNWA1.AYeqqd02IIShthzh",
        recordingPassword: " FX#e95b9",
      },
    ],
  },
]);
