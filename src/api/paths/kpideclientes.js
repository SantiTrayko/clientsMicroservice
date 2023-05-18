
module.exports = function () {
  let operations = {
    GET
  }

  function GET(req, res, next) {
    res.status(200).json({ edadPromedioClientes: 25, stdevEdadesClientes: 5 })
  }

  GET.apiDoc = {
    summary: "Permite obtener kpi de clientes",
    operationId: "clientsKpi",
    consumes: ["application/json"],
    parameters: [],
    responses: {
      200: {
        description: "Kpi de clientes",
        schema: {
          type: "object",
          properties: {
            edadPromedioClientes: {
              type: 'integer',
              description: 'Edad promedio de los clientes',
            },
            stdevEdadesClientes: {
              type: 'integer',
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