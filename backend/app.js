const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
//Route Imports
const product = require("./routes/productRoute.js");
const user = require("./routes/userRoutes.js");
app.use("/", product);
app.use("/", user);

//Middleware for errors
app.use(errorMiddleware);

module.exports = app;
