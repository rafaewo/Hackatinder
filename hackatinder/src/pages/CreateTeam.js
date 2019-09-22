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
					<legend className="f4 fw6 ph0 mh0">Nomeie sua equipe</legend>
					<div className="mt3 mb3">
						<label className="db fw6 lh-copy f6">Equipe:</label>
						<input
							className="w-100 tc br2 ba b--moon-gray pv2"
							name="nome"
							value={team.nome}
							onChange={({ target }) => setTeam({ nome: target.value })}
							placeholder="Digite o nome da sua equipe"
						/>
					</div>

					<button className="f5 mv2 br2 white pointer bg-animate bg-light-purple shadow-4 pa2 bn border-box" onClick={() => criarEquipe()}>
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
