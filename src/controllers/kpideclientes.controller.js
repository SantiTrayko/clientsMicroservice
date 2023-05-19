const prismaClient = require("../prisma/prismaClient");

module.exports = async function kpiClientesController(req, res, next) {
  try {
    const avgClientes = await prismaClient.cliente.aggregate({
      _avg: {
        edad: true,
      },
    });

    const stdevEdades = await prismaClient.$queryRaw`
      SELECT STDDEV_POP(edad) as desviacion
      FROM "public"."Cliente";
    `;
    
    const response = {
      edadPromedioClientes: parseFloat(avgClientes._avg.edad?.toFixed(2)),
      stdevEdadesClientes: parseFloat(stdevEdades[0].desviacion?.toFixed(2)),
    };

    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  } finally {
    await prismaClient.$disconnect();
  }
};
