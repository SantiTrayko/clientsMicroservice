const { inspect } = require("util");

const prismaClient = require("../prisma/prismaClient");

module.exports = async function listClientesController(req, res, next) {
  try {
    const clients = await prismaClient.cliente.findMany({
      select: {
        nombre: true,
        apellido: true,
        edad: true,
        fechaDeNacimiento: true,
        fechaProbableDeMuerte: true,
      },
    });

    return res.status(200).json(clients);
  } catch (error) {
    console.log(inspect(error));
    return next(error);
  } finally {
    await prismaClient.$disconnect();
  }
};
