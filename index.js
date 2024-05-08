const express = require("express");
const cors = require("cors");
// -------------------------------------------------------
const app = express();
// -------------------------------------------------------
// ** routes import
const uploadRoutes = require("./src/routes/upload-routes");
require("dotenv").config();
// ** cors settings
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // For legacy browser support
};
// -------------------------------------------------------
app.use(cors());
app.use(express.json());
// ** upload files
app.use("/images", express.static("images"));
app.use("/files", express.static("files"));
// ** api link
app.use("/api/upload", uploadRoutes);
app.use("*", (req, res) => {
  res.status(404).send("This route doesnt exist");
});
// ** Port
app.listen(80, () => {
  console.log("listenning on port : 80");
});
