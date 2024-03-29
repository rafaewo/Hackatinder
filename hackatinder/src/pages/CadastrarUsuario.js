import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import withAuthentication from '../containers/withAuthentication'
import withFirebase from '../containers/withFirebase'

const CadastrarUsuario = props => {
	const [userForm, setUserForm] = useState({
		nome: '',
		shawee_user: '',
		skill: 'Designer',
		skills: [],
		id: null,
	})

	useEffect(() => {
		checkIfUsuarioHasCadastro()
	}, [])

	const checkIfUsuarioHasCadastro = async () => {
		const firestore = props.firebase.firestore()

		const usuarioCadastro = await firestore
			.collection('usuarios')
			.where('user_id', '==', props.user.uid)
			.get()

		if (!usuarioCadastro.empty) {
			const user = {
				id: usuarioCadastro.docs[0].id,
				...usuarioCadastro.docs[0].data(),
			}

			setUserForm({
				id: user.id,
				nome: user.nome,
				shawee_user: user.usuario,
				skills: user.skills,
			})
		}
	}

	const removeSkill = index => {
		const customUserForm = { ...userForm }
		const skills = [...customUserForm.skills]

		skills.splice(index, 1)
		customUserForm.skills = skills

		setUserForm(customUserForm)
	}

	const handleInputChange = ({ target }) => {
		const customUserForm = { ...userForm }
		customUserForm[target.name] = target.value
		setUserForm(customUserForm)
	}

	const adicionarSkill = () => {
		const customUserForm = { ...userForm }

		if (customUserForm.skill && customUserForm.skills.length < 3) {
			customUserForm.skills.push(customUserForm.skill)
			customUserForm['skill'] = ''
			setUserForm(customUserForm)
		}
	}

	const getNewUser = async reference => {
		const firestore = props.firebase.firestore()

		const usuarioCadastro = await firestore
			.collection('usuarios')
			.doc(reference.id)
			.get()

		return { id: usuarioCadastro.id, ...usuarioCadastro.data() }
	}

	const saveUsuarios = async () => {
		const firestore = props.firebase.firestore()
		const customUserForm = { ...userForm }

		let usuario = {}

		if (!customUserForm.id) {
			usuario = {
				nome: customUserForm.nome,
				usuario: customUserForm.shawee_user,
				email: props.user.email,
				user_id: props.user.uid,
				skills: customUserForm.skills,
				image: `https://picsum.photos/seed/${Math.random()}/200/300`,
				convites: [],
				solicitacoes: [],
			}

			firestore
				.collection('usuarios')
				.add(usuario)
				.then(getNewUser)
				.then(user => props.history.push('/NoTeam', { hackauser: user }))
		} else {
			usuario = {
				nome: customUserForm.nome,
				usuario: customUserForm.shawee_user,
				skills: customUserForm.skills,
			}

			firestore
				.collection('usuarios')
				.doc(customUserForm.id)
				.update(usuario)
				.then(() => props.history.push('/home'))
		}
	}

	return (
		<div className="mt5">
			<article className="mw6 center bg-white br3 ba b--black-10">
				<div className="tc">
					<h1 className="f3 mb2">Complete seu cadastro</h1>
				</div>

				<div className="pt3 pb5 ph3">
					<div className="mb3">
						<label>Nome Completo</label>
						<input
							className="w-100 br2 ba b--moon-gray pv2 ph3"
							type="text"
							name="nome"
							placeholder="Digite seu nome completo..."
							onChange={handleInputChange}
							value={userForm.nome}
						/>
					</div>
					<div className="mb3">
						<label>Seu e-mail</label>
						<input
							className="w-100 br2 ba b--moon-gray pv2 ph3"
							type="email"
							readOnly
							disabled
							name="email"
							value={props.user.email}
						/>
					</div>
					<div className="mb3">
						<label>Seu usuario na Shawee</label>
						<input
							className="w-100 br2 ba b--moon-gray pv2 ph3"
							type="text"
							name="shawee_user"
							placeholder="Vê lá na Shawee e cola aqui..."
							onChange={handleInputChange}
							value={userForm.shawee_user}
						/>
					</div>
					<div className="mb3">
						<label>Habilidades Técnicas</label>
						<small className="db">
							Inclua no máximo 3 habilidades principais
						</small>
						<div className="flex">
							<select
								value={userForm.skill}
								name="skill"
								className="w-100 br2 ba b--moon-gray pv2 ph3"
								onChange={handleInputChange}
							>
								<option value={'Designer'}>Designer</option>
								<option value={'Frontend'}>Frontend</option>
								<option value={'Backend'}>Backend</option>
								<option value={'Gerente'}>Gerente</option>
							</select>
							<button className="ml2" onClick={() => adicionarSkill()}>
								Adicionar
							</button>
						</div>
						<div className="mt2">
							{userForm.skills.map((skill, skillIndex) => {
								return (
									<span
										key={skillIndex}
										onClick={() => removeSkill(skillIndex)}
										className="f7 mr2 ph2 pv1 bg-light-purple white"
									>
										{skill}
									</span>
								)
							})}
						</div>
					</div>
					<button className="db w-100 pv2" onClick={() => saveUsuarios()}>
						Salvar
					</button>
				</div>
			</article>
		</div>
	)
}

const cadastrarUsuarioWithRouter = withRouter(CadastrarUsuario)
const cadastrarUsuarioWithFirebase = withFirebase(cadastrarUsuarioWithRouter)
export default withAuthentication(cadastrarUsuarioWithFirebase)
