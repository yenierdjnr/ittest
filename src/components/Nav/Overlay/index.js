import React, { Component } from 'react';
import { Link } from "gatsby";

import { IconX } from 'Elements/Icons';
import styles from './styles.module.scss';

class OverlayNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousPath: ''
    }
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
    const links = document.querySelectorAll(`.${styles.menuItem} a`);

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
    const { handleCloseClick } = this.props;

    return (
      <div className={ styles.capsule }>
        <div className={ styles.xIconCapsule } onClick={ handleCloseClick }>
          <IconX className={ styles.xIcon }/>
        </div>

        <nav className={ styles.menu }>
          <ul className={ styles.menuList }>
            <li className={ `${styles.menuItem} home` }>
              <Link to="/">home</Link>
            </li>
            <li className={ `${styles.menuItem} course` }>
              <Link to="/courses/">courses</Link>
            </li>
            <li className={ `${styles.menuItem} live` }>
              <Link to="/live/">on air</Link>
            </li>
            <li className={ `${styles.menuItem} plans` }>
              <Link to="/plans/">pricing</Link>
            </li>
            <li className={ `${styles.menuItem} forTeams` }>
              <Link to="/for-teams/">for teams</Link>
            </li>
            <li className={ `${styles.menuItem} forYou` }>
              <Link to="/for-you/">for you</Link>
            </li>
            <li className={ styles.menuItem }>
              <a href={`${process.env.ITPROTV_URL}/login/`}>log in</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default OverlayNav;
