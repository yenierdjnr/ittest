import React, { Component } from 'react';
import { mainLayout, mainRows, overlay } from './layout.scss';

import Footer from 'Components/Footer';
import Header from 'Components/Header';
import Overlay from 'Components/Overlay';

import 'Styles/globals.scss';
import 'Styles/normalizer.scss';


class Index extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.refs.overlay.style.display === 'block' || this.refs.overlay.style.display === '') {
      this.handleCloseClick();
    }
  }

  handleCloseClick = (e) => {
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
        <div id="headerContent" className={ mainRows }>
          <Header pathname={ location.pathname }/>
        </div>
        <div id="mainContent" className={ mainRows }>
          { children }
        </div>
        <div id="footerContent" className={ mainRows }>
          <Footer />
        </div>
      </div>
    );
  }
}


export default Index;
