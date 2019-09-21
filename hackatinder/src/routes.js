import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoTeam from './pages/NoTeam'
import Login from './pages/Login'
import Logout from './pages/Logout'
import SearchCrew from './pages/SearchCrew'
import SearchTeam from './pages/SearchTeam'
import CreateTeam from './pages/CreateTeam'
import InTeam from './pages/InTeam'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/home" exact component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/Sair" component={Logout} />
			<Route path="/searchCrew" component={SearchCrew} />
			<Route path="/NoTeam" component={NoTeam} />
			<Route path="/InTeam" component={InTeam} />
			<Route path="/CreateTeam" component={CreateTeam} />
			<Route path="/searchTeam" component={SearchTeam} />
		</Switch>
	)
}

export default Routes
