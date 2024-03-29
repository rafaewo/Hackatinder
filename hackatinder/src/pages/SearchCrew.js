import React, { Component } from 'react'
import withAuthentication from '../containers/withAuthentication'

const participante = [
	{
		nome: 'User X',
		usuario: '@uxser',
		skill: 'Design',
	},
	{
		nome: 'User Y',
		usuario: '@usery',
		skill: 'Backend',
	},
	{
		nome: 'User Z',
		usuario: '@youzer',
		skill: ['Design', 'Frontend'],
	},
]

class SearchCrew extends Component {
	render() {
		return (
			<div className="mt5 mh3">
				<h1 className='f4 black-70 mb4 ttu tc'>Convide participantes para sua equipe:</h1>
				<main className="mw6 center">
					<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">	
						<div className="dtc w2 w3-ns v-mid">
							<img
								src="http://mrmrs.github.io/photos/p/5.jpg"
								alt="imgx"
								className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
							/>
						</div>
						<div className="dtc v-mid pl3">
							<h1 className="f6 f5-ns fw6 lh-title black mv0">
								{participante[0].nome}{' '}
							</h1>
							<h2 className="f6 fw4 di mt0 mb0 black-60">
								{participante[0].usuario}
							</h2>
							<span className="f7 ma2 ph2 pv1 bg-light-purple white">
								{participante[0].skill}
							</span>
						</div>
						<div className="dtc v-mid">
							<form className="w-100 tr">
								<button
									className="f6 shadow-1 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
									type="submit"
								>
									{' '}
									Convidar{' '}
								</button>
							</form>
						</div>
					</article>
					<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
						<div className="dtc w2 w3-ns v-mid">
							<img
								src="http://mrmrs.github.io/photos/p/3.jpg"
								alt="imgy"
								className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
							/>
						</div>
						<div className="dtc v-mid pl3">
							<h1 className="f6 f5-ns fw6 lh-title black mv0">
								{participante[1].nome}
							</h1>
							<h2 className="f6 di fw4 mt0 mb0 black-60">
								{participante[1].usuario}
							</h2>
							<span className="f7 ma2 ph2 pv1 bg-light-purple white">
								{participante[1].skill}
							</span>
						</div>
						<div className="dtc v-mid">
							<form className="w-100 tr">
								<button
									className="f6 shadow-1 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
									type="submit"
								>
									{' '}
									Convidar{' '}
								</button>
							</form>
						</div>
					</article>
					<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
						<div className="dtc w2 w3-ns v-mid">
							<img
								src="http://mrmrs.github.io/photos/p/4.jpg"
								alt="imgz"
								className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
							/>
						</div>
						<div className="dtc v-mid pl3">
							<h1 className="f6 f5-ns fw6 lh-title black mv0">
								{participante[2].nome}
							</h1>
							<h2 className="f6 di fw4 mt0 mb0 black-60">
								{participante[2].usuario}
							</h2>
							<span className="f7 ma2 ph2 pv1 bg-light-purple white">
								{participante[2].skill[0]}
							</span>
							<span className="f7 ma2 ph2 pv1 bg-light-purple white">
								{participante[2].skill[1]}
							</span>
						</div>
						<div className="dtc v-mid">
							<form className="w-100 tr">
								<button
									className="f6 shadow-1 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
									type="submit"
								>
									{' '}
									Convidar{' '}
								</button>
							</form>
						</div>
					</article>
				</main>
			</div>
			
		)
	}
}

export default withAuthentication(SearchCrew)
