var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cliente', function(req, res, next) {
  let dni = req.body.dni;
  let nombre = req.body.nombre;
  res.send('Dni:'+dni+', nombre:'+nombre);
});

module.exports = router;
