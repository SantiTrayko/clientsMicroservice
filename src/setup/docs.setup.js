'use strict'
const openapi = require('express-openapi')
const path = require('path')
const swaggerUi = require('swagger-ui-express')

module.exports = function setupDocs({ app }) {
  openapi.initialize({
    apiDoc: require('../api/api-doc.js'),
    app,
    paths: path.resolve(__dirname, "../api/paths"),
    errorMiddleware: function (err, req, res, next) {
      if(err.message){ 
        res.status(400).json({ error: err.message })
      }
      if(err.errors){ 
        res.status(err.status).json(err.errors)
      }
    }
  })
  app.use(
    '/api/documentation',
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerOptions: {
        url: `/api/api-docs`,
      },
    })
  )
}
