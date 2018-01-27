import axios from 'axios';
import constants from '../constants';

import { WALLET_UPDATED } from './types';

export const walletLoad = (uid, authToken) => (dispatch) => new Promise((resolve, reject) => {
	axios.get(`${constants.apiURL}/Persons/${uid}/wallets?access_token=${authToken}`)
		.then((response) => {
			dispatch({
				type: WALLET_UPDATED,
				data: response.data
			})
			resolve(response);
		})
		.catch((error) => {
			reject(error.response.data.error);
		});
});

export const walletCreate = (data, authToken) => (dispatch) => new Promise((resolve, reject) => {
	axios.post(`${constants.apiURL}/Persons/${data.personId}/wallets?access_token=${authToken}`, data)
		.then((response) => {
			dispatch({
				type: WALLET_UPDATED,
				data: response.data
			})
			resolve(response);
		})
		.catch((error) => {
			reject(error.response.data.error);
		});
});