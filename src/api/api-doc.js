const apiDoc = {
  swagger: "2.0",
  basePath: "/api",
  info: {
    title: "PinApp Clientes API.",
    version: "1.0.0",
  },
  definitions: {
    Cliente: {
      type: "object",
      properties: {
        nombre: {
          type: "string",
          description: 'Nombre del cliente'
        },
        apellido: {
          type: "string",
          description: "Apellido del cliente"
        },
        edad: {
          type: 'integer',
          description: 'Edad del cliente'
        },
        fechaDeNacimiento: {
          type: 'string',
          format: 'date',
          description: 'Fecha de nacimiento del cliente'
        }
      },
      required: ["nombre", "apellido", "edad", "fechaDeNacimiento"],
      example: {
        nombre: 'Jorge',
        apellido: 'Gutiérrez',
        edad: 60,
        fechaDeNacimiento: '1957-05-10'
      }
    },
  },
  paths: {},
};

module.exports = apiDoc;