import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import reduxStore from './redux/store';

import HelloFox from './components/HelloFox';

const App = () =>
	(
		<div className="App">
			<Provider store={reduxStore}>
				<HelloFox />
			</Provider>
		</div>
	);

export default App;
