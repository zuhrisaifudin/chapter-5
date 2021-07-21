const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('games', { title: 'Game Academy by Zuhri Saifudin' });
});

module.exports = router;
