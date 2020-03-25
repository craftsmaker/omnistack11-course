const express = require('express')

const app = express()

app.post('/users', (request,response)=>{
	return response.json({
		name:'tiago',
	})
})

app.listen(3333)