import React, { Component, Fragment } from 'react';

import Overlay from 'Components/Overlay';
import Logo from 'Components/Logo';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.refs.overlay.style.display === 'block') {
      this.handleCloseClick();
    }
  }

  handleMenuClick = e => {
    const body = document.getElementsByTagName('body')[0];

    body.style.overflow = 'hidden';
    this.refs.overlay.style.display = 'block';
  };

  handleCloseClick = e => {
    const body = document.getElementsByTagName('body')[0];

    body.style.overflow = '';
    this.refs.overlay.style.display = 'none';
  };

  render() {
    return (
      <Fragment>
        <div className={ styles.overlay } ref="overlay">
          <Overlay location={ this.props.pathname } callback={ this.handleCloseClick }/>
        </div>

        <header className={ styles.container }>
          <Logo className={ styles['logo-box'] }/>

          <div className={ styles.nav }>
            <Nav location={ this.props.pathname } handleMenuClick={ this.handleMenuClick }/>
          </div>
        </header>
      </Fragment>
    );
  }
}


export default Header;
