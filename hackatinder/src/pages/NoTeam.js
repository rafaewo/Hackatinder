import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import withAuthentication from '../containers/withAuthentication'

const NoTeam = props => {
	const hackaUser =
		props.hackatinder ||
		(props.location.state && props.location.state.hackauser)

	return (
		<div className="mt5">
			<article className="mw5 shadow-4 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				<div className="tc">
					<img
						src={`https://picsum.photos/seed/${Math.random()}/200/300`}
						alt="profile pic"
						className="br-100 h4 w4 dib ba b--black-05 pa2"
					/>
					<h1 className="f3 mb2">{hackaUser && hackaUser.usuario}</h1>

					<div>
						{hackaUser &&
							hackaUser.skills.map((skill, skillIndex) => {
								return (
									<p
										key={skillIndex} 
										className="f7 dim ma1 code ph2 pv2 mb2 dib white bg-light-purple shadow-1"
									>
										{skill}
									</p>
								)
							})}
					</div>
				</div>
			</article>
			<p className="f2 black-70 tc">Você ainda não tem uma equipe.</p>

			<div className="flex tc justify-around">
				<Link
					className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box shadow-4"
					to="/CreateTeam"
				>
					Criar
				</Link>
				<Link
					className="f5 no-underline white bg-animate hover-bg-white bg-light-purple hover-black inline-flex items-center pa3 ba border-box shadow-4"
					to="/searchTeam"
				>
					Procurar
				</Link>
			</div>
		</div>
	)
}

const noTeamWithRouter = withRouter(NoTeam)
export default withAuthentication(noTeamWithRouter)
