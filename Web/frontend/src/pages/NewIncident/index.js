import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css'
import api from '../../services/api.js'
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
	const [title,setTitle] = useState('')
	const [description,setDescription] = useState('')
	const [value,setValue] = useState('')
	const ongId = localStorage.getItem('ongId')
	const history = useHistory()

	async function handleForm(e){
		e.preventDefault()
		const data = {
					title,
					description,
					value
				}
		try{
			const response = await api.post('incidents',data,{
				headers:{
					Authorization: ongId
				}
			})
			history.push('/profile')
		}
		catch(err){
			console.log('Something goes wrong with handleForm on Register')
		}
	}
	return(
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>

					<h1>Cadastro</h1>
					<p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
					<Link to="/profile" className="back-link">
						<FiArrowLeft/>
						Voltar para perfil
					</Link>
				</section>

				<form onSubmit={handleForm}>
					<input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
					<textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
					<input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}