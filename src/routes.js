const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentCrontroler = require('./controllers/IncidentController')

// const connection = require('./database/connection')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentCrontroler.index)
routes.post('/incidents', IncidentCrontroler.create)

module.exports = routes