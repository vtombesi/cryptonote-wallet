import { USER_LOGIN, USER_LOGOUT, SET_REDIRECT_URL } from 'actions/types';

const initialState = {
	logged: false,
	data: null,
	redirectURL: null
};

export default function user(state = initialState, action) {
	let newState = initialState;
	switch (action.type) {
		case SET_REDIRECT_URL:
			newState = {
				logged: state.logged,
				data: state.data,
				redirectURL: action.url,
			};
			break;
		case USER_LOGIN:
			newState = {
				logged: true,
				data: action.data,
				redirectURL: state.redirectURL,
			};
			console.log(`User logged in`, action.data);
			break;
		case USER_LOGOUT:
			newState = {
				logged: false,
				data: null,
				redirectURL: state.redirectURL,
			};
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}