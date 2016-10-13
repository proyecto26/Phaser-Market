var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/plugins', function(req, res, next) {
  var plugins = [
    { name: "plugin 1" },
    { name: "plugin 2" },
    { name: "plugin 3" },
    { name: "plugin 4" },
    { name: "plugin 5" },
  ];
  res.render('addons', { addons: plugins, title: "Plugins" });
});

router.get('/extensions', function(req, res, next) {
  var extensions = [
    { name: "extension 1" },
    { name: "extension 2" },
    { name: "extension 3" },
    { name: "extension 4" },
    { name: "extension 5" },
  ];
  res.render('addons', { addons: extensions, title: "Extensions" });
});

router.get('/templates', function(req, res, next) {
  var templates = [
    { name: "template 1" },
    { name: "template 2" },
    { name: "template 3" },
    { name: "template 4" },
    { name: "template 5" },
  ];
  res.render('addons', { addons: templates, title: "Templates" });
});

module.exports = router;
