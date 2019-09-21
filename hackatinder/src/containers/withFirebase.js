import React from 'react'
import firebase from './firebase'

const withFirebase = Component => props => (
	<Component {...props} firebase={firebase} />
)

export default withFirebase
