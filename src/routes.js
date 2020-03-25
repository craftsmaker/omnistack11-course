const express = require('express')

const routes = express.Router()

routes.get('/user', (request,response)=>{
	console.log(request.body)
	return response.json({
		name:'tiago',
	})
})

module.exports = routes