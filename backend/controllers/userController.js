const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 201, res);
});

//Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter email & password",
    });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Please enter valid email & password",
    });
  }
  // console.log(password);

  const isPasswordMatched = await user.comparePassword(password);
  // console.log(isPasswordMatched);
  if (!isPasswordMatched) {
    return res.status(401).json({
      success: false,
      message: "Please enter valid email & password",
    });
  }
  sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
  // console.log(res.cookie);
  res.cookie("token", "", {
    expire: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out ",
  });
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});
