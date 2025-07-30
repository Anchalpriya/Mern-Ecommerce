const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRouter = require("./routes/Auth"); // Make sure this path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "running" });
});

// MongoDB connection
