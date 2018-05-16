import { all } from 'redux-saga/effects';

import flowSaga from '../modules/flow/saga';

function* saga()
{
	yield all([
		flowSaga(),
	]);
}

export default saga;
