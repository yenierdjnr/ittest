import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from 'Components/Logo';
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
        this.setState({
          previousPath: links[i]
        });
      }
    }
  }

  render() {
    return (
      <header className={ styles.container }>
        <Logo className={ styles['logo-box'] }/>

        <nav className={ styles.menu }>
          <ul className={ styles['menu-list'] }>
            <li className={ styles['menu-item'] }>
              <Link to="/course-library/">courses</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <Link to="/live/">on air</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <Link to="/plans/">pricing</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <Link to="/for-teams/">for teams</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <Link to="/for-you/">for you</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <a className={ styles['login-link'] } href="https://itpro.tv/login/">log in</a>
            </li>
            <li className={ styles['menu-item'] }>
              <Link className={ styles['try-free'] } to="/plans/">try it free</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}


export default Header;
