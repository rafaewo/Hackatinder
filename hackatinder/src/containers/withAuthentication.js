import React, { useEffect, useState } from 'react'
import Login from '../pages/Login'
import firebase from './firebase'
import { withRouter } from 'react-router-dom'

const withAuthentication = Component => props => {
	const [user, setUser] = useState(null)

	const handleAuthChanged = user => {
		localStorage.setItem('authUser', JSON.stringify(user))
		setUser(user)
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
