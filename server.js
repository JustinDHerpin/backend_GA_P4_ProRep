const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
// const port = process.env.PORT || 5000;
const mongoose = require("./db/connection");

const app = express();

app.set("port", process.env.PORT || 5000);
// const Course = require('./models/courseSchema.js')
// const Wine = require('./models/wineSchema')
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/courses", require("./routes/coursesRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));

app.use(errorHandler);

// app.listen(port, () => console.log(`Server running on port: ${port}`));
app.listen(app.get("port"), () =>
  console.log(`Server running on port: ${app.get("port")}`)
);
