import { combineReducers } from 'redux';
import flow from '../modules/flow/reducer';

const rootReducer = combineReducers(
	{
		flow,
	});

export default rootReducer;
