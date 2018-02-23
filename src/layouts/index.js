import React from 'react';

import 'Styles/normalizer.css';
import 'Styles/globals.css';

import Header from 'Components/Header';
import Footer from 'Components/Footer';


const Index = props => {
	return (
		<div className="layout">
			<Header />
			{ props.children() }
			<Footer />
		</div>
	);
};


export default Index;