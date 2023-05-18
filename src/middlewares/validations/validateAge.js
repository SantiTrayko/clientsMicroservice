const { DateTime } = require('luxon');

module.exports = (req, res, next) => {
  const { edad, fechaDeNacimiento } = req.body;

  const fechaActual = DateTime.now();
  const fechaNacimiento = DateTime.fromFormat(fechaDeNacimiento, 'yyyy-MM-dd');
  const edadCalculada = Math.floor(fechaActual.diff(fechaNacimiento, 'years').years);
  
  if (edad !== edadCalculada) {
    return next({ status: 400, errors: [ { message: 'La edad no coincide con la fecha de nacimiento' } ] });
  }

  next();
};