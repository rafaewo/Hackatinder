import React from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'
import firebase from '../containers/firebase'

const Login = props => {
	const uiConfig = {
		signInFlow: 'popup',
		signInSuccessUrl: '/home',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
	}

	return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
}

export default Login
