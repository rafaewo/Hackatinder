import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import SearchCrew from './pages/SearchCrew';
import SearchTeam from './pages/SearchTeam';
import NoTeam from './pages/NoTeam';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/NoTeam' component={NoTeam} />
            <Route path='/searchCrew' component={SearchCrew} />
			<Route path='/searchTeam' component={SearchTeam} />
		</Switch>
	);
}

export default Routes;