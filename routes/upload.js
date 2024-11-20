const express = require("express");
const router = express.Router();
const uploads = require("./uploads");

// Upload route
router.post("/upload", uploads.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    url: req.file.path, // Cloudinary URL for the uploaded file
    public_id: req.file.filename, // Cloudinary file ID
  });
});

module.exports = router;
