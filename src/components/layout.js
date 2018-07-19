import React, { Component } from 'react';
import { mainLayout, mainRows, overlay } from './layout.scss';

import Footer from 'Components/Footer';
import Header from 'Components/Header';
import Overlay from 'Components/Overlay';

import 'Styles/globals.scss';
import 'Styles/normalizer.scss';


class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      overlayVisible: false
    }
  }
  handleCloseClick = () => {
    this.setState({
      overlayVisible: false
    })
  };

  handleOpenClick = () => {
    this.setState({
      overlayVisible: true
    })
  }

  render() {
    const { children, location } = this.props;
    const { overlayVisible } = this.state;

    return (
      <div className={ mainLayout }>
        <div id="overlay" className={ `${overlay} ${ !overlayVisible ? 'hidden' : '' }` }  >
          <Overlay pathname={ location.pathname } callback={ this.handleCloseClick }/>
        </div>
        <div id="headerContent" className={ mainRows }>
          <Header pathname={ location.pathname } onMenuClick={this.handleOpenClick}/>
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
