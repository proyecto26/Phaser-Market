var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var templates = [
    { name: "template 1" },
    { name: "template 2" },
    { name: "template 3" },
    { name: "template 4" },
    { name: "template 5" },
  ];
  res.render('addons', { addons: templates, title: "Templates" });
});

router.get('/:addon', function(req, res, next) {
  
  res.render('addon', { title: "Template 1" });
});

module.exports = router;