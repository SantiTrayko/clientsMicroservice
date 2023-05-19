const kpiClientesController = require('../../controllers/kpideclientes.controller');

module.exports = function () {
  let operations = {
    GET: kpiClientesController
  }

  operations.GET.apiDoc = {
    summary: "Permite obtener kpi de clientes",
    operationId: "clientsKpi",
    consumes: ["application/json"],
    tags: ['Clientes'],
    parameters: [],
    responses: {
      200: {
        description: "Kpi de clientes",
        schema: {
          type: "object",
          properties: {
            edadPromedioClientes: {
              type: 'number',
              format: 'float',
              description: 'Edad promedio de los clientes',
            },
            stdevEdadesClientes: {
              type: 'number',
              format: 'float',
              description: 'Desviación estándar entre las edades de todos los clientes',
            }
          },
          example: {
              edadPromedioClientes: 25,
              stdevEdadesClientes: 5
          },
        }
      }
    }
  }

  return operations;
}