var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {

  let nuevo = __dirname.split('\\routes');

  console.log(nuevo);

  res.sendFile(nuevo[0] + "/public/index.html");
});

router.post('/cliente/ver', function(req, res, next) {
  let dni = req.body.dni;
  let nombre = req.body.nombre;
  res.send({
    mensaje:'registro',
    dni,
    nombre
  });
});

module.exports = router;
