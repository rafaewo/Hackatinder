import React, { useState, useEffect } from 'react'
import InTeam from './InTeam'
import NoTeam from './NoTeam'
import withAuthentication from '../containers/withAuthentication'
import withFirebase from '../containers/withFirebase'
import CadastrarUsuario from './CadastrarUsuario'

const Home = props => {
	const [hackatinderUser, sethackatinderUser] = useState(null)
	const [hasCadastro, setHasCadatro] = useState(true)
	const [inTeam, setInTeam] = useState(false)

	const checkIfUsuarioHasCadastro = async () => {
		const firestore = props.firebase.firestore()

		const usuarioCadastro = await firestore
			.collection('usuarios')
			.where('user_id', '==', props.user.uid)
			.get()

		setHasCadatro(!usuarioCadastro.empty)

		if (!usuarioCadastro.empty) {
			sethackatinderUser({
				id: usuarioCadastro.docs[0].id,
				...usuarioCadastro.docs[0].data(),
			})

			const grupo = usuarioCadastro.docs[0].data().grupo

			if (grupo) {
				setInTeam(true)
			}
		}
	}

	useEffect(() => {
		console.log(props)
		checkIfUsuarioHasCadastro()
	}, [])

	if (hasCadastro)
		return (
			<div>
				{inTeam ? (
					<InTeam hackatinder={hackatinderUser} />
				) : (
					<NoTeam hackatinder={hackatinderUser} />
				)}
			</div>
		)
	else return <CadastrarUsuario />
}

const homeWithFirebase = withFirebase(Home)
export default withAuthentication(homeWithFirebase)
