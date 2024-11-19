const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'chat-media', // Folder in Cloudinary
    allowed_formats: ['mp3', 'wav', 'webm'], // Allowed file types
    resource_type: 'auto', // Detects audio, video, image types
  },
});

const upload = multer({ storage });

module.exports = upload;
