import React from 'react'
import { Link } from 'react-router-dom'

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
						<button className="button" type="submit">Entrar</button>

						<Link to="/register" className="back-link">
							<FiLogIn size={16} color="#E02041"/>
							Não tenho cadastro
						</Link>
					</form>
				</section>

				<img src={heroesImg} alt="Heroes"/>
			</div>
		)
	}
}