const express = require('express')

const app = express()

app.use(express.json())
app.get('/user', (request,response)=>{
	console.log(request.body)
	return response.json({
		name:'tiago',
	})
})

app.listen(3333)


/*
	Express:

	Route: localhost
	Resource:/user
*/
/*
	Métodos HTTP:

	GET: Buscar/listar informações ""
	POST: Criar informação ""
	PUT: Alterar informação no ""
	DELETE: Deletar informação "" 
*/

/*
	Tipos de parâmetros:

	Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
	Route params: Parâmetros utilizados para identificar recursos
	Request body
*/