const express = require('express');
const acheDiaDaSemana = require('./controladores/diasemana');
const { documentofiltrado, diaDaSemanaFiltrado } = require('./middelware/filtro');
const base64 = require('./middelware/base64');
const {
  listarDocumentos,
  buscarDocumento,
  criarDocumento,
  deletarDocumento,
} = require('./controladores/documento');

const routes = express();

routes.get('/documents', listarDocumentos);
routes.get('/documents/:id', buscarDocumento);
routes.post('/documents', documentofiltrado, base64, criarDocumento);
routes.delete('/documents/:id', deletarDocumento);

routes.get('/weekday-after', diaDaSemanaFiltrado, acheDiaDaSemana);

module.exports = routes;
