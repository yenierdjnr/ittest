import React from 'react';

import 'Styles/normalizer.css';
import 'Styles/globals.css';

import Header from 'Components/Header';
import Footer from 'Components/Footer';


const Index = props => {
  const { location } = props;

	return (
		<div className="layout">
			<Header pathname={ location.pathname }/>
			{ props.children() }
			<Footer />
		</div>
	);
};


export default Index;
