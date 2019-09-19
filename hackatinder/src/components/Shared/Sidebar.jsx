import React from 'react'

const Sidebar = props => {
	const { state } = props;
	const items = [
		{
			link: '/',
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
					return <SidebarItem item={item} />
				})}
			</ul>
		</aside>
	)
}

const SidebarItem = props => {
	const { item } = props;
	return (
		<li className="ph3 pv3 bb b--black-10 ">
			<a className="link f4 gray" href={item.link}>{item.name}</a>
		</li>
	)
}

export default Sidebar
