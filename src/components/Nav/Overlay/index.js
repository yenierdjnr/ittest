import React, { Component } from 'react';
import Link from 'gatsby-link';

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
    const { handleCloseClick } = this.props;

    return (
      <div className={ styles.capsule }>
        <div className={ styles['x-icon-capsule'] } onClick={ handleCloseClick }>
          <IconX className={ styles['x-icon'] }/>
        </div>

        <nav className={ styles.menu }>
          <ul className={ styles['menu-list'] }>
            <li className={ `${styles['menu-item']} home` }>
              <Link to="/">home</Link>
            </li>
            <li className={ `${styles['menu-item']} course` }>
              <Link to="/courses/">courses</Link>
            </li>
            <li className={ `${styles['menu-item']} live` }>
              <Link to="/live/">on air</Link>
            </li>
            <li className={ `${styles['menu-item']} plans` }>
              <Link to="/plans/">pricing</Link>
            </li>
            <li className={ `${styles['menu-item']} for-teams` }>
              <Link to="/for-teams/">for teams</Link>
            </li>
            <li className={ `${styles['menu-item']} for-you` }>
              <Link to="/for-you/">for you</Link>
            </li>
            <li className={ styles['menu-item'] }>
              <a href={`${process.env.SELF_URL}/login/`}>log in</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}


export default OverlayNav;
