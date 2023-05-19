const listClientesController = require('../../controllers/listClientes.controller')

module.exports = function () {
  let operations = {
    GET: listClientesController
  }

  operations.GET.apiDoc = {
    summary: "Permite obtener un listado de todos los clientes",
    operationId: "getAllClients",
    consumes: ["application/json"],
    tags: ['Clientes'],
    parameters: [],
    responses: {
      200: {
        description: "Listado de clientes",
        schema: {
          type: "array",
          items: {
            allOf: [
              { $ref: '#/definitions/Cliente' },
              {
                type: 'object',
                properties: {
                  fechaProbableDeMuerte: {
                    type: 'string',
                    format: 'date',
                    description: 'Fecha probable de muerte basada en la media mundial actual que es de 73 años',
                  } 
                }
              }
            ]
          },
          example: {
            nombre: 'Jorge',
            apellido: 'Gutiérrez',
            edad: 60,
            fechaDeNacimiento: '10/05/1957',
            fechaProbableDeMuerte: '18/05/2043'
          },
        }
      }
    }
  }

  return operations;
}