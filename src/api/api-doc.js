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
          description: "Nombre del cliente",
        },
        apellido: {
          type: "string",
          description: "Apellido del cliente",
        },
        edad: {
          type: "integer",
          description: "Edad del cliente",
        },
        fechaDeNacimiento: {
          type: "string",
          format: "date",
          description: "Fecha de nacimiento del cliente",
        },
      },
      required: ["nombre", "apellido", "edad", "fechaDeNacimiento"],
      example: {
        nombre: "Jorge",
        apellido: "Gutiérrez",
        edad: 60,
        fechaDeNacimiento: "1963-05-10",
      },
    },
    BadRequest: {
      type: "array",
      items: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          errorCode: {
            type: "string",
          },
          path: {
            type: "string",
          },
          location: {
            type: "string",
          },
        },
        example: {
          path: "fechaDeNacimiento",
          errorCode: "required.openapi.requestValidation",
          message: "must have required property 'fechaDeNacimiento'",
          location: "body",
        },
      },
    },
  },
  paths: {},
};

module.exports = apiDoc;
