const express = require("express");
//----------------------------------------------------------------------------
const {
  addOneImage,
  addOneFile,
  addManyFile,
  addManyImage,
} = require("../controllers/upload-contoller");
//----------------------------------------------------------------------------
// ** middleware
const uploadImage = require("../middleware/upload-image");
const uploadFile = require("../middleware/upload-file");
// ** router
const router = express.Router();
//----------------------------------------------------------------------------
// @desc    upload one imge
// @route   POST
// @access  private
// @Role    doctor + patient
router.post("/image/one", uploadImage.single("image"), addOneImage);
//----------------------------------------------------------------------------
// @desc    upload many images imge
// @route   POST
// @access  private
// @Role    doctor + patient
router.post("/image/many", uploadImage.array("image"), addManyImage);
//----------------------------------------------------------------------------
// @desc    upload one file
// @route   POST
// @access  private
// @Role    doctor + patient
router.post("/file/one", uploadFile.single("file"), addOneFile);
//----------------------------------------------------------------------------
// @desc    upload many files
// @route   POST
// @access  private
// @Role    doctor + patient
router.post("/file/many", uploadFile.array("file"), addManyFile);
//----------------------------------------------------------------------------
module.exports = router;
