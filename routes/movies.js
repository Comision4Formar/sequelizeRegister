var express = require('express');
var router = express.Router();

const {list} = require('../controllers/moviesController');

/* GET home page. */
router.get('/list', list);

module.exports = router;
