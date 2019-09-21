import React, { useEffect, useState } from 'react'
import Login from '../pages/Login'
import firebase from './firebase'
import { withRouter } from 'react-router-dom'
import withFirebase from './withFirebase'

const withAuthentication = Component => props => {
	const [user, setUser] = useState(null)

	const handleAuthChanged = authuser => {
		localStorage.setItem('authUser', JSON.stringify(authuser))
		setUser(authuser)
	}

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(handleAuthChanged)

		return () => unregisterAuthObserver()
	})

	return user ? <Component {...props} user={user} /> : <Login />
}

export default withAuthentication
