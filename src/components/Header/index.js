import React, { Component, Fragment } from 'react';


import Logo from 'Components/Logo';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


class Header extends Component {


  handleMenuClick = e => {
    const body = document.getElementsByTagName('body')[0];

    body.style.overflow = 'hidden';
    // this.refs.overlay.style.display = 'block';
  };

  render() {
    return (
      <header className={ styles.container }>
        <Logo className={ styles['logo-box'] }/>

        <div className={ styles.nav }>
          <Nav location={ this.props.pathname } handleMenuClick={ this.handleMenuClick }/>
        </div>
      </header>
    );
  }
}


export default Header;
