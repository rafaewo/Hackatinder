import React from 'react'

const Menu = props => {
	return (
		<header className="flex mt1 items-center justify-between ph3 pv2 bg-near-white shadow-5">
			<img width="35" src="/icons/ic_menu.svg" alt="img" onClick={() => props.onHamburgerClicked()}/>
			<a className="f3 f2-l fw7 ttu light-purple dim tracked lh-title mt0 mb1 code link" href='/'>Hackatinder</a>
			<img width="35" src="/icons/ic_user.svg" alt="img"/>
		</header>
	)
}

export default Menu
