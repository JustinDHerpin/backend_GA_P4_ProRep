const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/middleware')
const port = process.env.PORT || 5000

const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/courses', require('./routes/coursesRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port: ${port}`))