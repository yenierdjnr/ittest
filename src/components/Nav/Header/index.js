import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";

import { IconMenu } from 'Elements/Icons';
import styles from './styles.module.scss';
window.styles = styles

class HeaderNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousPath: ''
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
    const links = document.querySelectorAll(`.${styles.menuItem} a`);

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

  handleMenuClick = (e) => {
    const body = document.getElementsByTagName('body')[0];
    const overlay = document.getElementById('overlay');

    body.style.overflow = 'hidden';
    overlay.style.display = 'block';
  };

  render() {
    return (
      <Fragment>
        <nav className={ styles.menu }>
          <ul className={ styles.menuList }>
            <li className={ styles.menuItem }>
              <Link to="/courses/">courses</Link>
            </li>
            <li className={ styles.menuItem }>
              <Link to="/live/">on air</Link>
            </li>
            <li className={ styles.menuItem }>
              <Link to="/plans/">pricing</Link>
            </li>
            <li className={ styles.menuItem }>
              <Link to="/for-teams/">for teams</Link>
            </li>
            <li className={ styles.menuItem }>
              <Link to="/for-you/">for you</Link>
            </li>

            <li className={ styles.menuItemDiff }>
              <a className={ styles.loginLink } href={`${process.env.ITPROTV_URL}/login/`} >log in</a>
            </li>
            <li className={ styles.menuItemDiff }>
              <Link className={ styles.tryFree } to="/plans/">try it free</Link>
            </li>
          </ul>
        </nav>
        <IconMenu className={ styles.menuIcon } onClick={ this.handleMenuClick }/>
      </Fragment>
    );
  }
}


export default HeaderNav;
