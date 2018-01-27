import React, {Component} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators} from 'redux';

import { walletCreate, walletUpdate, walletLoad } from 'actions/wallet';

class SecuredWallet extends React.Component {
	componentDidMount() {
		const { dispatch, currentURL } = this.props;
		browserHistory.replace("/wallet/overview");
	}

	componentDidUpdate(props) {
		if (this.props.user && this.props.wallet && this.props.wallet.data === null && this.props.walletCreate) {
			const { userId, id } = this.props.user.data;

			this.props.walletLoad(userId, id)
				.then((response) => {
					console.log(response);

					console.log(this.props);

				})
				.catch((error) => {
					console.log(error);
					if (error.status === 404) {
						this.props.walletCreate({
							remote_address: null,
							amount: 1000,
							personId: userId
						}, id)
							.then((response) => {
								console.log(response);
							})
							.catch((error) => {
								console.log(error);
							});
					}
				});


		}
	}

	render() {
		if (this.props.wallet.data !== null) {
			return this.props.children;
		} else {
			return <div>No wallet</div>;
		}
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		crypto: state.crypto,
		iota: state.iota,
		wallet: state.wallet,
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		walletCreate,
		walletLoad
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SecuredWallet);