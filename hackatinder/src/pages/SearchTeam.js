import React, { useState, useEffect } from 'react'
import withAuthentication from '../containers/withAuthentication'
import withFirebase from '../containers/withFirebase'

const Team = ({ team, allowToRequest, onSolicitar, ...props }) => {
	return (
		<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
			<div className="dtc w2 w3-ns">
				<img
					src={team.image}
					alt="imgx"
					className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
				/>
			</div>
			<div className="dtc v-mid pl3">
				<h1 className="f6 f5-ns fw6 lh-title black mv0">
					{team.name} ({team.skills.length})
				</h1>
				<span className="f7 black-40">Skills dos membros</span>
				<div className="flex flex-wrap mt2">
					{team.skills.map((skill, skillIndex) => {
						return (
							<span
								key={skillIndex}
								className="f7 ma1 ph2 pv1 bg-light-purple white"
							>
								{skill}
							</span>
						)
					})}
				</div>
			</div>

			{allowToRequest && (
				<div className="dtc v-mid">
					<div className="w-100 tr">
						<button
							className="f6 button-reset shadow-1 bg-white ba b--black-10 dim pointer pv1 black-60"
							type="submit"
							onClick={onSolicitar}
						>
							Solicitar
						</button>
					</div>
				</div>
			)}
		</article>
	)
}

const SearchTeam = props => {
	const firebase = props.firebase
	const [hackaUser, setHackaUser] = useState([])
	const [equipes, setEquipes] = useState([])
	const [equipesFiltradas, setEquipesFiltradas] = useState(-1)

	useEffect(() => {
		fetchGruposFromFirestore()
		findHackatinderUser()
	}, [])

	const findHackatinderUser = async () => {
		const firestore = props.firebase.firestore()

		const usuarioCadastro = await firestore
			.collection('usuarios')
			.where('user_id', '==', props.user.uid)
			.get()

		if (!usuarioCadastro.empty) {
			setHackaUser({
				id: usuarioCadastro.docs[0].id,
				...usuarioCadastro.docs[0].data(),
			})
		}
	}

	const fetchGruposFromFirestore = async () => {
		const firestore = firebase.firestore()

		const teams = await firestore
			.collection('grupos')
			.where('num_membros', '<=', 4)
			.get()
			.then(snapshot => snapshot.docs)
			.then(teams => teams.map(t => ({ id: t.id, ...t.data() })))

		setEquipes(teams)
	}

	const handleInputChange = ({ target }) => {
		const searchTerm = target.value.toLowerCase()

		if (!searchTerm) {
			fetchGruposFromFirestore()
			setEquipesFiltradas(-1)
			return
		}

		const equipesFiltradas = equipes.filter(equipe =>
			equipe.name.toLowerCase().includes(searchTerm)
		)
		setEquipesFiltradas(equipesFiltradas || [])
	}

	const handleRadioChange = ({ target }) => {
		const quantidadeIntegrantes = Number(target.value)

		if (quantidadeIntegrantes === 0) {
			fetchGruposFromFirestore()
			setEquipesFiltradas(-1)
			return
		}

		const equipesFiltradas = equipes.filter(
			equipe => equipe.skills.length === quantidadeIntegrantes
		)
		setEquipesFiltradas(equipesFiltradas || [])
	}

	const handleSolicitar = (grupoid, userid) => {
		console.log(grupoid, userid)
	}

	return (
		<React.Fragment>
			<nav className="center mw6 flex justify-between items-center pa3">
				{/* <div className="hover-light-red">
                    <span className="dib v-mid">Filtrar</span>
                    <img className="dib v-mid" width="30" src="/icons/ic_arrow_down.svg"/>
                </div> */}

				<div className="w-100">
					<input
						onChange={handleInputChange}
						type="text"
						className="w-100 br2 ba b--moon-gray pv2 ph3"
						placeholder="Busque por aqui"
					/>

					<br />
					<p className="mb0">Quantidade de integrantes: </p>
					<input
						onChange={handleRadioChange}
						value="1"
						type="radio"
						name="integrantes"
						id="so1"
					/>
					<label htmlFor="so1" className="f7 mr2">
						01
					</label>
					<input
						onChange={handleRadioChange}
						value="2"
						type="radio"
						name="integrantes"
						id="so2"
					/>
					<label htmlFor="so2" className="f7 mr2">
						02
					</label>
					<input
						onChange={handleRadioChange}
						value="3"
						type="radio"
						name="integrantes"
						id="so3"
					/>
					<label htmlFor="so3" className="f7 mr2">
						03
					</label>
					<input
						onChange={handleRadioChange}
						value="4"
						type="radio"
						name="integrantes"
						id="so4"
					/>
					<label htmlFor="so4" className="f7 mr2">
						04
					</label>
					<input
						onChange={handleRadioChange}
						value="0"
						type="radio"
						name="integrantes"
						id="tudo"
					/>
					<label htmlFor="tudo" className="f7 mr2">
						Tudo
					</label>
					{/* <img className="dib v-mid ml2" width="20" src="/icons/ic_search.svg"/> */}
				</div>
			</nav>

			<main className="mw6 center ph2">
				{equipesFiltradas !== -1
					? equipesFiltradas.map((equipe, equipeIndex) => {
							return (
								<Team
									onSolicitar={() => handleSolicitar(equipe.id, hackaUser.id)}
									allowToRequest={!hackaUser.grupo}
									key={equipeIndex}
									team={equipe}
								/>
							)
					  })
					: equipes.map((equipe, equipeIndex) => {
							return (
								<Team
									onSolicitar={() => handleSolicitar(equipe.id, hackaUser.id)}
									allowToRequest={!hackaUser.grupo}
									key={equipeIndex}
									team={equipe}
								/>
							)
					  })}
			</main>
		</React.Fragment>
	)
}

const searchTeamWithFireabse = withFirebase(SearchTeam)
export default withAuthentication(searchTeamWithFireabse)
