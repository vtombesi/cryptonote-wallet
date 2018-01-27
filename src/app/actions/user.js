import axios from 'axios';
import constants from '../constants';

import { browserHistory } from 'react-router';

import { USER_LOGIN, USER_REGISTERED, USER_LOGOUT, USER_VERIFIED } from './types';

export const login = (data) => (dispatch) => new Promise((resolve, reject) => {
	axios.post(`${constants.apiURL}/Persons/login`, data)
		.then((response) => {
			console.log(response);
			dispatch({
				type: USER_LOGIN,
				data: response.data
			});
			resolve(response);
		})
		.catch((error) => {
			console.log(error);
			reject(error.response.data.error);
		});
});

export function register(data) {
	console.log('trying to add user: ', data);
	return dispatch => {
		axios.post(`${constants.apiURL}/Persons`, {
			email: data.email,
			password: data.password,
			realname: data.realname,
		})
			.then((response) => {
				browserHistory.push('/');
				dispatch({
					type: USER_REGISTERED,
					data: response.data
				})
			})
	}
}

export function verify(data) {
	return dispatch => {
		axios.post(`${constants.apiURL}/Persons/verify`, data)
			.then((response) => {
				browserHistory.push('/');
				dispatch({
					type: USER_VERIFIED,
					data: response.data
				})
			})
	}
}

export function logout(authToken) {
	return dispatch => {
		axios.post(`${constants.apiURL}/Persons/logout?access_token=${authToken}`)
			.then((response) => {
				browserHistory.push('/');
				dispatch({
					type: USER_LOGOUT,
					data: {}
				})
			})
	}
}
