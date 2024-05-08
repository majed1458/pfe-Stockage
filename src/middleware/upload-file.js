const path = require("path");
const multer = require("multer");
//----------------------------------------------------------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files");
  },
  filename: (req, file, cb) => {
    let f1 = cb(
      null,
      `${file.originalname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});
//----------------------------------------------------------------------------
const upload = multer({
  storage: storage,
});
module.exports = upload;
