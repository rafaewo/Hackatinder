import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withAuthentication from '../containers/withAuthentication'
import withFirebase from '../containers/withFirebase'

const TeamHeader = props => {
	return (
		<h1 className=" lh-copy pa3 ph0-l bb tc b--black-10">Time: {props.nome}</h1>
	)
}

const TeamIntegrants = props => {
	return (
		<React.Fragment>
			<h3 className="ma1 tc ph0-l b--black-10">Equipe</h3>
			<main className="mw6 center pa3">
				{props.membros.map((membro, membroIndex) => {
					return (
						<article
							key={membroIndex}
							className="dt w-100 bb b--black-05 pb2 mt2"
							href="#0"
						>
							<div className="dtc w2 w3-ns v-mid">
								<img
									src="http://mrmrs.github.io/photos/p/5.jpg"
									alt="imgx"
									className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
								/>
							</div>
							<div className="dtc v-mid pl3">
								<h1 className="f6 mr1 f5-ns fw6 di lh-title black mv0">
									{membro.nome}
								</h1>
								{/* PROBLEMA: MAIS DE UMA SKILL PRECISA SER RENDERIZADA SEPARADAMENTE */}
								{membro.skills.map((skill, skillIndex) => {
									return (
										<span
											key={skillIndex}
											className="f7 ma1 code ph2 pv1 bg-light-purple white"
										>
											{skill}
										</span>
									)
								})}
							</div>
						</article>
					)
				})}
			</main>
		</React.Fragment>
	)
}

const InTeam = props => {
	const [team, setTeam] = useState(null)

	const fetchTeam = async () => {
		const user = props.hackatinder
		const firestore = props.firebase.firestore()

		const grupo = await firestore
			.collection('grupos')
			.doc(user.grupo)
			.get()

		setTeam({ id: grupo.id, ...grupo.data() })
	}

	const sairDaEquipe = async () => {
		const user = props.hackatinder
		console.log(user)
		const firestore = props.firebase.firestore()

		await firestore
			.collection('usuarios')
			.doc(user.id)
			.update({
				grupo: null,
			})

		props.history.push('/NoTeam', { hackauser: props.hackatinder })
	}

	useEffect(() => {
		fetchTeam()
	}, [])

	return (
		<React.Fragment>
			{team && (
				<div>
					<TeamHeader nome={team.name} />
					<TeamIntegrants membros={team.membros} />
				</div>
			)}

			<div className="flex items-center justify-around pa4">
				<Link
					to="#0"
					className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box mr4"
				>
					<span className="pl1">Editar</span>
				</Link>
				<Link
					to="/searchCrew"
					className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box mr4"
				>
					<span className="pl1">Adicionar</span>
				</Link>
				<button
					onClick={() => sairDaEquipe()}
					className="f5 no-underline white bg-animate bg-red hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box"
				>
					<span className="pr1">Sair</span>
				</button>
			</div>
		</React.Fragment>
	)
}

const inTeamWithFirebase = withFirebase(InTeam)
const inTeamWithRouter = withRouter(inTeamWithFirebase)
export default withAuthentication(inTeamWithRouter)
