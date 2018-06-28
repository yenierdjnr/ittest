import React, { Component } from 'react';

import 'Styles/normalizer.css';
import 'Styles/globals.css';

import Overlay from 'Components/Overlay';
import Header from 'Components/Header';
import Footer from 'Components/Footer';


import { mainLayout, overlay, mainRows, mainContent, footerContent } from './styles.module.scss';


class Index extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.refs.overlay.style.display === 'block') {
      this.handleCloseClick();
    }
  }

  handleCloseClick = e => {
    const body = document.getElementsByTagName('body')[0];

    body.style.overflow = '';
    this.refs.overlay.style.display = 'none';
  };

  render() {
    const { children, location } = this.props;

  	return (
  		<div className={ mainLayout }>
        <div id="overlay" className={ overlay } ref="overlay">
          <Overlay pathname={ location.pathname } callback={ this.handleCloseClick }/>
        </div>
        <div className={ mainRows }>
    			<Header pathname={ location.pathname }/>
        </div>
  			<div id={ mainContent } className={ mainRows }>
          { children() }
        </div>
        <div id={ footerContent} className={ mainRows }>
    			<Footer />
        </div>
  		</div>
  	);
  }
};


export default Index;
