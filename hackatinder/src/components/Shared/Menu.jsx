import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import withAuthentication from '../../containers/withAuthentication'
import withFirebase from '../../containers/withFirebase'

const Menu = props => {
	const [user, setUser] = useState(null)

	const setUserOnHeader = async () => {
		const firestore = await props.firebase.firestore()

		if (props.user) {
			const userDocument = await firestore
				.collection('usuarios')
				.where('user_id', '==', props.user.uid)
				.get()

			if (!userDocument.empty)
				setUser({
					id: userDocument.docs[0].id,
					...userDocument.docs[0].data(),
				})
		}
	}

	useEffect(() => {
		setUserOnHeader()
	}, [props.location.state])

	return (
		<header className="flex mt1 items-center justify-between ph3 pv2 bg-near-white shadow-5">
			<img
				width="35"
				src="/icons/ic_menu.svg"
				alt="img"
				onClick={() => props.onHamburgerClicked()}
			/>
			<Link
				className="f3 f2-l fw7 ttu light-purple dim tracked lh-title mt0 mb1 code link"
				to="/"
			>
				Hackatinder
			</Link>

			{user && (
				<Link to="/editarUsuario">
					<img
						width="35"
						className="br-100 h2 w2 dib ba b--black-05"
						src={user.image}
						alt="img"
					/>
				</Link>
			)}
		</header>
	)
}

const menuWithFirebase = withFirebase(Menu)
const menuWithRouter = withRouter(menuWithFirebase)
export default withAuthentication(menuWithRouter)
