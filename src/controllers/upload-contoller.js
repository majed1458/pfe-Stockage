//----------------------------------------------------------------------------
const addOneImage = async (req, res) => {
  try {
    // ** check files
    if (!req.file) {
      return res.status(406).json({ Message: "Missing required file" });
    }
    // ** ==>
    return res.status(201).json({ message: "Uploaded successfully", path: "" });
  } catch (error) {
    console.log("##########:", error);
    res.status(500).send({ Message: "Server Error", Error: error.message });
  }
};
//----------------------------------------------------------------------------
const addManyImage = async (req, res) => {
  try {
    // content
  } catch (error) {
    // errors
  }
};
//----------------------------------------------------------------------------
const addOneFile = async (req, res) => {
  try {
    // content
  } catch (error) {
    // errors
  }
};
//----------------------------------------------------------------------------
const addManyFile = async (req, res) => {
  try {
    try {
      // ** check files
      if (!req.files.length === 0) {
        return res.status(406).json({ Message: "Missing required file" });
      }
      // ** array of links
      const paths = [];
      for (let i = 0; i < req.files.length; i++) {
        paths.push(`files/${req.files[0].filename}`);
      }
      // ** ==>
      return res.status(201).json({ message: "Uploaded successfully", paths });
    } catch (error) {
      console.log("##########:", error);
      res.status(500).send({ Message: "Server Error", Error: error.message });
    }
  } catch (error) {
    // errors
  }
};
//----------------------------------------------------------------------------
module.exports = {
  addOneImage,
  addOneFile,
  addManyFile,
  addManyImage,
};
