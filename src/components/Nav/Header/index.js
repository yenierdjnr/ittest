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
    const links = document.querySelectorAll(`.${styles['menu-item']} a`);

    for (const link of links) {
      if (link.pathname === currentPath) {
       link.parentElement.classList.add(styles.active);
       this.setState({
        previousPath: link
       });
       break;
      }
    }
  }

  render() {
    const { handleMenuClick } = this.props;

    return (
      <Fragment>
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

            <li className={ styles['menu-item-diff'] }>
              <a className={ styles['login-link'] } href="https://itpro.tv/login/">log in</a>
            </li>
            <li className={ styles['menu-item-diff'] }>
              <Link className={ styles['try-free'] } to="/plans/">try it free</Link>
            </li>
          </ul>
        </nav>
        <IconMenu className={ styles['menu-icon'] } onClick={ handleMenuClick }/>
      </Fragment>
    );
  }
}


export default HeaderNav;
