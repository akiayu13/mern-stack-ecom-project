const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    maxLength: [30, "Name cannot be more than 30 characters"],
    minLength: [3, "Name cannot be less than 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [8, "Password should be 8 characters or more"],
  },
  role: {
    type: String,
    default: "user",
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  var salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//Compare Passwords
userSchema.methods.comparePassword = async function (Password) {
  return await bcrypt.compare(Password, this.password);
};

module.exports = mongoose.model("User", userSchema);
