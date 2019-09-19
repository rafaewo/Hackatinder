import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
// import SearchTeam from './pages/SearchTeam';
import SearchCrew from './pages/SearchCrew';

function Routes() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			{/* <Route path='/searchTeam' component={SearchTeam} /> */}
            <Route path='/searchCrew' component={SearchCrew} />
		</Switch>
	);
}

export default Routes;