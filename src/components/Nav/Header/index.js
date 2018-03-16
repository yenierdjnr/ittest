import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import { IconMenu } from 'Elements/Icons';
import styles from './styles.module.scss';


const HeaderNav = ({ className='', handleMenuClick='' }) => {
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
          <li className={ styles['menu-item'] }>
            <a className={ styles['login-link'] } href="https://itpro.tv/login/">log in</a>
          </li>
          <li className={ styles['menu-item'] }>
            <Link className={ styles['try-free'] } to="/plans/">try it free</Link>
          </li>
        </ul>
      </nav>
      <IconMenu className={ styles['menu-icon'] } onClick={ handleMenuClick }/>
  </Fragment>
  );
}


export default HeaderNav;
