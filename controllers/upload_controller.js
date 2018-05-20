
/* Render upload page. */
exports.renderUploadPage = function(req, res) {
  res.render('upload', { title: 'upload' });
};

//
exports.uploadFile = function(req, res) {
  res.redirect('/upload');
};
