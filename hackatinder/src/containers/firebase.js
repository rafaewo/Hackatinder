import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
	apiKey: 'AIzaSyCNTmWFfRY_g5m314zXaXUykVqhCnsnceU',
	authDomain: 'hackatinder.firebaseapp.com',
	databaseURL: 'https://hackatinder.firebaseio.com',
	projectId: 'hackatinder',
	storageBucket: 'hackatinder.appspot.com',
	messagingSenderId: '1019013027508',
	appId: '1:1019013027508:web:25f6c5560d74f89b7169e1',
}

firebase.initializeApp(firebaseConfig)

export default firebase
