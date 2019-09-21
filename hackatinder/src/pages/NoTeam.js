import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import withAuthentication from '../containers/withAuthentication'

const NoTeam = props => {
	const hackaUser =
		props.hackatinder ||
		(props.location.state && props.location.state.hackauser)

	return (
		<div className="mt5">
			<article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
				<div className="tc">
					<img
						src={`https://picsum.photos/seed/${Math.random()}/200/300`}
						alt="caty"
						className="br-100 h4 w4 dib ba b--black-05 pa2"
						title="Photo of a kitty staring at you"
					/>
					<h1 className="f3 mb2">{hackaUser && hackaUser.usuario}</h1>

					<div>
						{hackaUser &&
							hackaUser.skills.map((skill, skillIndex) => {
								return (
									<p
										key={skillIndex}
										className="f6 dim mr1 br-pill ph3 pv2 mb2 dib white bg-black shadow-1"
									>
										{skill}
									</p>
								)
							})}
					</div>
				</div>
			</article>
			<p className="f2 tc">Você ainda não tem uma equipe.</p>

			<div className="flex tc justify-around">
				<Link />
				<Link
					className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box "
					to="/CreateTeam"
				>
					Criar
				</Link>
				<Link
					className="f5 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa3 ba border-box"
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
