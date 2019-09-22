import React, { useState, useEffect } from 'react'
import withAuthentication from '../containers/withAuthentication'
import withFirebase from '../containers/withFirebase'

const EQUIPES_DATA = [
	{
		image: `https://picsum.photos/seed/${Math.random()}/200/300`,
		name: 'Intergalaticos da Tribo Python',
		skills: ['Designer', 'Backend'],
	},
	{
		image: `https://picsum.photos/seed/${Math.random()}/200/300`,
		name: 'Alguma outra equipe',
		skills: ['Backend', 'Backend', 'Backend'],
	},
	{
		image: `https://picsum.photos/seed/${Math.random()}/200/300`,
		name: 'Precisamos de Backend',
		skills: ['Designer', 'Designer', 'Frontend'],
	},
	{
		image: `https://picsum.photos/seed/${Math.random()}/200/300`,
		name: 'Internet',
		skills: ['Backend'],
	},
]

const API_URL =
	'https://us-central1-hackatinder.cloudfunctions.net/criarUsuario'

const Team = ({ team, ...props }) => {
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
				<h1 className="f6 f5-ns fw6 lh-title black mv0">{team.name} ({team.skills.length})</h1>
				<span className='f7 black-40'>Skills dos membros</span>
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

			<div className="dtc v-mid">
				<form className="w-100 tr">
					<button
						className="f6 button-reset shadow-1 bg-white ba b--black-10 dim pointer pv1 black-60"
						type="submit"
					>
						Solicitar
					</button>
				</form>
			</div>
		</article>
	)
}

const SearchTeam = props => {
	const firebase = props.firebase

	const fetchGruposFromFirestore = async () => {
		const firestore = firebase.firestore()

		const gruposDocuments = await firestore
			.collection('grupos')
			.where('numero_skills', '<=', 4)
			.get()

		console.log(gruposDocuments)
	}

	useEffect(() => {
		fetchGruposFromFirestore()
	}, [])

	const [equipes, setEquipes] = useState(EQUIPES_DATA)

	const handleInputChange = ({ target }) => {
		const searchTerm = target.value.toLowerCase()

		if (!searchTerm) {
			setEquipes(EQUIPES_DATA)
			return
		}

		const equipesFiltradas = EQUIPES_DATA.filter(equipe =>
			equipe.name.toLowerCase().includes(searchTerm)
		)
		setEquipes(equipesFiltradas || [])
	}

	const handleRadioChange = ({ target }) => {
		const quantidadeIntegrantes = Number(target.value)

		if (quantidadeIntegrantes === 0) {
			setEquipes(EQUIPES_DATA)
			return
		}

		const equipesFiltradas = EQUIPES_DATA.filter(
			equipe => equipe.skills.length === quantidadeIntegrantes
		)
		setEquipes(equipesFiltradas || [])
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
						id="so4"
					/>
					<label htmlFor="so4" className="f7 mr2">
						Tudo
					</label>
					{/* <img className="dib v-mid ml2" width="20" src="/icons/ic_search.svg"/> */}
				</div>
			</nav>

			<main className="mw6 center ph2">
				{equipes.map((equipe, equipeIndex) => {
					return <Team key={equipeIndex} team={equipe} />
				})}
			</main>
		</React.Fragment>
	)
}

const searchTeamWithFireabse = withFirebase(SearchTeam)
export default withAuthentication(searchTeamWithFireabse)
