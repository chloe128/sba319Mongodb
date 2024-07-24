require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const conn = require("./db/conn");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

//middleware
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);

const app = express();
conn();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
