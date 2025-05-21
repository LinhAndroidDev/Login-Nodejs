const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

// MongoDB connection
require("./config/db");

// Routes
const doctorRoutes = require("./routes/doctor.routes");
app.use("/", doctorRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
