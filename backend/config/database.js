const mongoose = require("mongoose");
exports.dbConn = async () => {
  try {
    await mongoose.connect(process.env.dbURL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("************** Database is connected **************");
  } catch {
    (err) => console.log(err);
  }
};
