const createClientController = require('../../controllers/createClient.controller');
const validateAge = require('../../middlewares/validations/validateAge');

module.exports = function () {
  let operations = {
    POST: [validateAge, createClientController]
  }

  operations.POST.apiDoc = {
    summary: "Crear nuevo cliente",
    operationId: "createCliente",
    consumes: ["application/json"],
    tags: ['Clientes'],
    parameters: [
      {
        in: "body",
        name: "cliente",
        schema: {
          $ref: "#/definitions/Cliente",
        },
      },
    ],
    responses: {
      200: {
        description: "Cliente creado",
        schema: {
          type: "object",
          $ref: '#/definitions/Cliente'
        }
      },
      400: {
        description: "Error en la consulta",
        schema: {
          type: "array",
          $ref: "#/definitions/BadRequest"
        }
      }
    }
  }

  return operations;
}