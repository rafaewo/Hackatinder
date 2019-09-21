import React, { useState } from 'react'
import withFirebase from '../containers/withFirebase'
import withAuthentication from '../containers/withAuthentication'

const CreateTeam = props => {
	const [team, setTeam] = useState({
		nome: '',
	})

	const criarEquipe = async () => {
		const firestore = props.firebase.firestore()
		const usuarioCadastro = await firestore
			.collection('usuarios')
			.where('user_id', '==', props.user.uid)
			.get()
		const hackauser = usuarioCadastro.docs[0].data()

		const customTeam = { ...team }

		const equipe = {
			image: `https://picsum.photos/seed/${Math.random()}/200/300`,
			name: customTeam.nome,
			skills: [].concat(hackauser.skills[0]),
			membros: [].concat({ ...hackauser }),
		}

		const grupo = await firestore.collection('grupos').add(equipe)

		await firestore
			.collection('usuarios')
			.doc(usuarioCadastro.docs[0].id)
			.update({ grupo: grupo.id })

		props.history.push('/searchCrew')
	}

	return (
		<div>
			<main className="pa4 black-80 ">
				<div className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
					<legend className="f4 fw6 ph0 mh0">Dê um nome a sua Equipe</legend>
					<div className="mt3 mb3">
						<label className="db fw6 lh-copy f6">Equipe:</label>
						<input
							className="w-100 br2 ba b--moon-gray pv2 ph3"
							name="nome"
							value={team.nome}
							onChange={({ target }) => setTeam({ nome: target.value })}
							placeholder="Digite o nome da sua equipe..."
						/>
					</div>
					{/* <div>
						<a
							href="/InTeam"
							className="f5 mv2 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa2 ba border-box"
						>
							<span className="pl1">Criar</span>
						</a>
					</div> */}

					<button className="db w-100 pv2" onClick={() => criarEquipe()}>
						Salvar
					</button>
				</div>
			</main>
		</div>
	)
}

const createTeamWithFirebase = withFirebase(CreateTeam)
const createTeamWithAuthentication = withAuthentication(createTeamWithFirebase)
export default createTeamWithAuthentication
