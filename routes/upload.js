var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({
      dest: './uploads/' // this saves your file into a directory called "uploads"
});

// Require controller modules.
var upload_controller = require('../controllers/upload_controller');

//Render Home Page
router.get('/', upload_controller.renderUploadPage);

router.post('/', upload.single('file-to-upload'), upload_controller.uploadFile);

module.exports = router;
