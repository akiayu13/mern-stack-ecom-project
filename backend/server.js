const app = require("./app");
const dotenv = require("dotenv");
const { dbConn } = require("./config/database");
const PORT = 4000;
const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

dotenv.config({ path: "backend/config/config.env" });

dbConn();

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
module.exports = app;
