import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchCrew from './pages/SearchCrew';
import SearchTeam from './pages/SearchTeam';
import NoTeam from './pages/NoTeam';
import CreateTeam from './pages/CreateTeam';
import InTeam from './pages/InTeam';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/NoTeam' component={NoTeam} />
			<Route path='/InTeam' component={InTeam} />
			<Route path='/CreateTeam' component={CreateTeam} />			
            <Route path='/searchCrew' component={SearchCrew} />
			<Route path='/searchTeam' component={SearchTeam} />
		</Switch>
	);
}

export default Routes;