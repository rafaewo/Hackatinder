import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => {
	const { state } = props;
	const items = [
		{
			link: '/searchTeam',
			name: 'Procurar uma equipe'
		},
		{
			link: '/searchCrew',
			name: 'Procurar integrantes'
		},
		{
			link: '/buscar-equipe',
			name: 'Convites e Solicitações'
		},
		{
			link: '/buscar-equipe',
			name: 'Configurações'
		},
		{
			link: '/buscar-equipe',
			name: 'Sair'
		}
	]

	return (
		<aside style={{ transform: state ? 'translate(0%)' : 'translate(-100%)' }} className="aspect-ratio w-100 aspect-ratio--object animated fadeIn a4 d2 bg-white">
			<header className="flex items-center justify-between ph3 pv2 bg-black-20">
				<h1 className="f4">Menu</h1>
				<img width="35" src="/icons/ic_close.svg" alt="img" onClick={() => props.onCloseSidebar()}/>
			</header>

			<ul className="list ph0">
				{items.map(item => {
					return <SidebarItem item={item} onClick={() => props.onCloseSidebar()}/>
				})}
			</ul>
		</aside>
	)
}

const SidebarItem = props => {
	const { item } = props;
	return (
		<li className="ph3 pv3 bb b--black-10 ">
			<Link onClick={props.onClick} className="link f4 gray" to={item.link}>{item.name}</Link>
		</li>
	)
}

export default Sidebar
