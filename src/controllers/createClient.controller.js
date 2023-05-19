const { DateTime } = require('luxon');

const prismaClient = require('../prisma/prismaClient');

module.exports = async function crearClienteController(req, res, next) {
  try {
    const { body } = req;

    const esperanzaVida = 73;
    const fechaNacimiento = DateTime.fromFormat(body.fechaDeNacimiento, 'yyyy-MM-dd');    
    const fechaFallecimiento = fechaNacimiento.plus({ years: esperanzaVida });
    
    const client = { 
      ...body,
      fechaDeNacimiento: fechaNacimiento.toFormat('yyyy-MM-dd'),
      fechaProbableDeMuerte: fechaFallecimiento.toFormat('yyyy-MM-dd'),
     }
    
    const { id, fechaProbableDeMuerte, ...newClient } = await prismaClient.cliente.create({ 
      data: client
    })

    return res.status(200).json(newClient);
  } catch (error) {
    return next(error) 
  } finally {
    await prismaClient.$disconnect();
  }
}