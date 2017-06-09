var express = require('express');
var router = express.Router();

var spotify = require('./spotify.handler.js');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.get('/', spotify.auth);

module.exports = router;