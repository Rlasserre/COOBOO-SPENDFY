const express = require('express');
const acheDiaDaSemana = require('./controladores/diadasemana');
const base64converter = require('./middleware/base64convers');
const {
  listarDocumentos,
  acharDocumento,
  criarDocumento,
  apagarDocumento,
} = require('./controladores/documents');

const routes = express();

routes.get('/documents', listarDocumentos);
routes.get('/documents/:id', acharDocumento);
routes.post('/documents', base64converter, criarDocumento);
routes.delete('/documents/:id', apagarDocumento);

routes.get('/weekday-after', acheDiaDaSemana);

module.exports = routes;
