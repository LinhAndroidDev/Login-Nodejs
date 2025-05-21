const mongoose = require("mongoose");

const uri =
  "mongodb+srv://nguyenlinh07082001bn:linh2001bn@linhzyyx.5jsvpun.mongodb.net/user";

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
