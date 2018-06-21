import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link';

import { IconMenu } from 'Elements/Icons';
import styles from './styles.module.scss';


class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
        previousPath: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { previousPath } = this.state;

    if (previousPath) {
      previousPath.parentElement.classList.remove(styles.active);
    }

    this.activateLink(nextProps.location);
  }

  componentDidMount() {
    this.activateLink(this.props.location);
  }

  activateLink = (currentPath) => {
    const regex = /\/courses\//g;
    const links = document.querySelectorAll(`.${styles['menu-item']} a`);

    for (const link of links) {
      if (link.pathname === currentPath) {
       link.parentElement.classList.add(styles.active);
       this.setState({
        previousPath: link
       });
       break;
      }

      if (regex.test(currentPath) && link.pathname === '/courses/') {
        link.parentElement.classList.add(styles.active);
       this.setState({
        previousPath: link
       });
       break;
      }
    }
  };

  handleMenuClick = e => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.getElementById('overlay');

    body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  };

    render() {

    return (
      <Fragment>
        <nav className={ styles.menu }>
          <ul className={ styles['menu-list'] }>
            <li className={ styles['menu-item'] }>
              <Link to="/courses/">courses</Link>
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

            <li className={ styles['menu-item-diff'] }>
            <a className={ styles['login-link'] } href={`${process.env.ITPROTV_URL}/login/`} loginLnk>log in</a>
            </li>
            <li className={ styles['menu-item-diff'] }>
              <Link className={ styles['try-free'] } to="/plans/">try it free</Link>
            </li>
          </ul>
        </nav>
        <IconMenu className={ styles['menu-icon'] } onClick={ this.handleMenuClick }/>
      </Fragment>
    );
  }
}


export default HeaderNav;
