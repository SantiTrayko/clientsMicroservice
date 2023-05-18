const express = require('express');
require('dotenv').config();

const setupDocs = require('./setup/docs.setup');

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
setupDocs({ app });

app.listen(port, () => console.log(`PinApp listening on port ${port}`))
// app.all('*', (req, res, next) => {
//   const err = new MiddlewareError(
//     `No se puede encontrar la ruta ${req.originalUrl} en el servidor!`,
//     404
//   )
//   next(err)
// })

