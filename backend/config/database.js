const mongoose = require("mongoose");
exports.dbConn = async () => {
  try {
    const dbURL =
      "mongodb+srv://akiayu13:akiayu.13@cluster0.d318fmq.mongodb.net/test_db?retryWrites=true&w=majority";
    await mongoose.connect(dbURL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log("************** Database is connected **************");
  } catch {
    (err) => console.log(err);
  }
};
