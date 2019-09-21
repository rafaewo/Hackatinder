import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchCrew from './pages/SearchCrew'
import SearchTeam from './pages/SearchTeam'
import NoTeam from './pages/NoTeam'
import Login from './pages/Login'
import Logout from './pages/Logout'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/Sair" component={Logout} />
			<Route path="/NoTeam" component={NoTeam} />
			<Route path="/searchCrew" component={SearchCrew} />
			<Route path="/searchTeam" component={SearchTeam} />
		</Switch>
	)
}

export default Routes
