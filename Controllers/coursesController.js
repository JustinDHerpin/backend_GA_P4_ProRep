const getCourses = (req, res) => {
    res.status(200).json({message: 'Get Courses'})
}

module.exports = {
    getCourses
}