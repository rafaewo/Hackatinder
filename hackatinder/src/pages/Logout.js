import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import withFirebase from '../containers/withFirebase'
import Login from './Login'

const Logout = props => {
	console.log(props)

	useEffect(() => {
		props.firebase.auth().signOut()
		props.history.push('/login')
	}, [])

	return <Login />
}

const logoutRouter = withRouter(Logout)
export default withFirebase(logoutRouter)
