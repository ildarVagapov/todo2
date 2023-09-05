import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root')

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);

	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<App />} >
							<Route path=':filter' element={<App />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}




