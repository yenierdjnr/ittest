import React, { Component, Fragment } from 'react';

import Overlay from 'Components/Overlay';
import Logo from 'Components/Logo';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousPath: '',
      links: []
    };
  }

  componentDidMount() {
    const links = document.querySelectorAll(`.${styles['menu-item']} a`);
    let _links = [];

    for (let i=0, len=links.length; i<len; i++) {
      if (links[i].className !== `${styles['login-link']}` &&
          links[i].className !== `${styles['try-free']}`)
      {
        _links.push(links[i]);
      }
    }

    this.setState({
      links: _links
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('pathname', nextProps)
    const { previousPath, links } = this.state;
    const { pathname:currentPath } = nextProps;

    if (previousPath) {
      previousPath.parentElement.classList.remove(styles.active);
    }

    for (let i=0, len=links.length; i<len; i++) {
      if (links[i].pathname === currentPath) {
        links[i].parentElement.classList.add(styles.active);
        console.log(links[i]);
        this.setState({
          previousPath: links[i]
        });
      }
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
          <Overlay callback={ this.handleCloseClick }/>
        </div>

        <header className={ styles.container }>
          <Logo className={ styles['logo-box'] }/>

          <div className={ styles.nav }>
            <Nav handleMenuClick={ this.handleMenuClick }/>
          </div>
        </header>
      </Fragment>
    );
  }
}


export default Header;
