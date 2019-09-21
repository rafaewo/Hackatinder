import React, { Component } from 'react'
import withFirebase from '../containers/withFirebase'
import withAuthentication from '../containers/withAuthentication'

const CreateTeam = props => {
	return (
		<div>
			<main className="pa4 black-80">
				<form className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
					<legend className="f4 fw6 ph0 mh0">Dê um nome a sua Equipe</legend>
					<div className="mt3">
						<label className="db fw6 lh-copy f6">Equipe:</label>
						<input
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
							name="nome-equipe"
						/>
					</div>
					<div>
						<a
							href="/InTeam"
							className="f5 mv2 no-underline black bg-animate hover-bg-light-purple hover-white inline-flex items-center pa2 ba border-box"
						>
							<span className="pl1">Criar</span>
						</a>
					</div>
				</form>
			</main>
		</div>
	)
}

const createTeamWithFirebase = withFirebase(CreateTeam)
const createTeamWithAuthentication = withAuthentication(createTeamWithFirebase)
export default createTeamWithAuthentication
