const express = require('express');
const rotas = express();
const controller = require('./controller')

rotas.get('/', controller.listar)
rotas.get('/:id', controller.detalhar)

module.exports = rotas;