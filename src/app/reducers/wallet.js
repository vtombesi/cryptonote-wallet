import { WALLET_LOADED, WALLET_UPDATED, WALLET_CREATED } from 'actions/types';

const initialState = {
	loaded: false,
	data: null
};

export default function wallet(state = initialState, action) {
	let newState = initialState;
	switch (action.type) {
		case WALLET_LOADED:
			newState = {
				loaded: true,
				data: state.data,
			};
			break;
		case WALLET_CREATED:
			newState = {
				logged: state.loaded,
				data: action.data,
			};
			console.log(`Creating wallet ${JSON.stringify(action.data)}`);
			break;
		case WALLET_UPDATED:
			newState = {
				logged: state.loaded,
				data: action.data,
			};
			console.log(`Updating wallet ${JSON.stringify(action.data)}`);
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}