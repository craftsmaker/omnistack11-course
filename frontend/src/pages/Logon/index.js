import React from 'react'

import './style.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

export default class Logon extends React.Component {
	render(){
		return (
			<div className="logon-container">
				<section className="form">
					<img src={logoImg} alt="Be The Hero"/>
					<form>
						<h1>Experimental</h1>
						<input placeholder="Sua ID"/>
						<button type="submit">Entrar</button>

						<a href="/register">
							<FiLogIn size={16} color="#E02041"/>
							Não tenho cadastro
						</a>
					</form>
				</section>

				<img src={heroesImg} alt="Heroes"/>
			</div>
		)
	}
}