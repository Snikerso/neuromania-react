import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation.js';
import Page from './Page.js';
import Footer from './Footer.js';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {

	return (
		<Router>
			<>
			<div className="app">
				<header>{<Header />}</header>
				{<Navigation />}
				<main className="main">

					<Page />

				</main>

			</div>
			<footer>{<Footer />}</footer>
			</>
		</Router>
	);

}

export default App;
