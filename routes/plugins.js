var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var plugins = [
    { name: "plugin 1" },
    { name: "plugin 2" },
    { name: "plugin 3" },
    { name: "plugin 4" },
    { name: "plugin 5" },
  ];
  res.render('addons', { addons: plugins, title: "Plugins" });
});

router.get('/:addon', function(req, res, next) {
  
  res.render('addon', { title: "Plugin 1" });
});

module.exports = router;