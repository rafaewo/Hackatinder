import React from 'react'

const Menu = props => {
	return (
		<header className="flex items-center justify-between ph3 pv2 bg-black-20">
			<img width="35" src="/icons/ic_menu.svg" onClick={() => props.onHamburgerClicked()}/>
			<h1 className="f4">Hackatinder</h1>
			<img width="35" src="/icons/ic_user.svg"/>
		</header>
	)
}

export default Menu
