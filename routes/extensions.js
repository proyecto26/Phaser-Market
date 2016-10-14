var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var extensions = [
    { name: "extension 1" },
    { name: "extension 2" },
    { name: "extension 3" },
    { name: "extension 4" },
    { name: "extension 5" },
  ];
  res.render('addons', { addons: extensions, title: "Extensions" });
});

router.get('/:addon', function(req, res, next) {
  
  res.render('addon', { title: "Extension 1" });
});

module.exports = router;