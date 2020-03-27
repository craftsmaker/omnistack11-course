const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentCrontroller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// const connection = require('./database/connection')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentCrontroller.index)
routes.post('/incidents', IncidentCrontroller.create)
routes.delete('/incidents/:id', IncidentCrontroller.delete)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)
// routes.post('/session/:id', SessionController.delete)

module.exports = routes