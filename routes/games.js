var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'Game Academy by Zuhri Saifudin' });
});

module.exports = router;
