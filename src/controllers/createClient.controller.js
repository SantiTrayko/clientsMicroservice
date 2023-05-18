const { inspect } = require('util')

module.exports = function crearClienteController(req, res, next) {
  try {
    return res.status(200).json({ nombre: 'JOSE', apellido: 'OSCAR', edad: 20, fechaDeNacimiento: '1957-05-10' });
  } catch (error) {
    console.log(inspect(error))
    return next(error) 
  }
}