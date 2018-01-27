import React from 'react';
import { Route, IndexRoute, Switch, Redirect } from 'react-router';

import App from './containers/app';
import DashboardComponent from './components/pages/dashboard';

const user = {
	logged: false,
	data: null,
};

export default (
	<Route path="/" component={(props) => {
		return (
			<App
				user={user}
				{...props}>
			</App>
		);
	}}>

    <IndexRoute component={DashboardComponent} />

    {/*<Route exact path="/login" component={AuthLogin} />*/}

	</Route>
);
