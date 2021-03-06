import React, { Component, Fragment } from 'react';
import { Link } from "gatsby";

import { IconMenu } from 'Elements/Icons';
import styles from './styles.module.scss';


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



  render() {
    const { onMenuClick } = this.props;
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
              <a className={ styles.loginLink } href={`${process.env.ITPROTV_URL}/login/`}>log in</a>
            </li>
            <li className={ styles.menuItemDiff }>
              <Link className={ styles.tryFree } to="/plans/">try it free</Link>
            </li>
          </ul>
        </nav>
        <IconMenu className={ styles.menuIcon } onClick={ onMenuClick }/>
      </Fragment>
    );
  }
}


export default HeaderNav;
