import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class UserIsAuthenticated extends React.Component {
	componentDidMount() {
		const { dispatch, currentURL } = this.props;

		if (!this.props.isLoggedIn) {
			this.props.setRedirectUrl(currentURL);
			browserHistory.replace("/login");
		}
	}

	render() {
		if (this.props.isLoggedIn) {
			return this.props.children;
		} else {
			return null;
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setRedirectUrl: (url) => {
			dispatch({
				type: 'SET_REDIRECT_URL',
				url,
			})
		},
	};
}

function mapStateToProps(state, ownProps) {
	return {
		isLoggedIn: state.user.logged,
		currentURL: ownProps.location.pathname,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIsAuthenticated);