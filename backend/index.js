require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/usermodel");
const Task = require("./models/taskmodel");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticationToken } = require("./utilities");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

// Create Account
app.post("/create-account", async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname) {
    return res
      .status(400)
      .json({ error: true, message: "fullname is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "email is required" });
  }

  if (!password) {
    return res
      .status(400)
      .json({ error: true, meessage: "password is required" });
  }

  const isUser = await User.findOne({ email: email });
  if (isUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  const user = new User({
    fullname,
    email,
    password,
  });

  await user.save();
  const accessToken = jwt.sign(
    {
      user,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "60m",
    }
  );

  return res.json({
    error: false,
    user,
    accessToken,
    message: "Registration Successful",
  });
});

//Login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ error: true, message: "email is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "password is required" });
  }
  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res
      .status(400)
      .json({ error: true, message: "User does not exist" });
  }

  if (userInfo.email === email && userInfo.password === password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "60m",
    });
    return res.json({
      error: false,
      message: "Login Successful",
      email,
      accessToken,
      
    });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "Invalid Credentials" });
  }
});

// Add Task
app.post("/add-task", authenticationToken, async (req, res) => {
    const { title } = req.body;
    const {user}= req.user;
    if (!title) {
      return res
       .status(400)
       .json({ error: true, message: "title is required" });
    }
   try{
    const task = new Task({
        title,
        userId: user._id,
    });
    await task.save();
    return res.json({
        error: false,
        message: "Task added successfully",
        task,
    });
   } catch(error){
    return res.sendStatus(500).json({
        error: true,
        message: "Internal Server Error",
    });
   }
})


app.listen(8000);

module.exports = app;
