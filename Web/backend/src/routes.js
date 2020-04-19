const express = require('express')
const {celebrate,Segments,Joi} = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentCrontroller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// 'Celebrate' é sobre validação
// 'Express' é sobre routing
//

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2)
	})
}), OngController.create)

routes.get('/incidents',celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number(),
	})
}),IncidentCrontroller.index)
routes.post('/incidents', IncidentCrontroller.create)
routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
			id: Joi.number().required()
		})
}),IncidentCrontroller.delete)

routes.get('/profile', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required()
	}).unknown()
}),ProfileController.index)

routes.post('/session', SessionController.create)
// routes.post('/session/:id', SessionController.delete)

module.exports = routes