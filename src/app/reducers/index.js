import { combineReducers } from 'redux';

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import wallet from './wallet';
import games from './games';
import prizes from './prizes';
import scores from './scores';
import crypto from './crypto';
import iota from './iota';

const config = {
	key: 'root',
	debug: true,
	storage,
};

const rootReducer = persistCombineReducers(config, {
	user,
	wallet,
	games,
	prizes,
	scores,
	crypto,
	iota,
});

export default rootReducer;
