import React, { Fragment } from 'react';
import Link from 'gatsby-link';

import { IconX } from 'Elements/Icons';
import styles from './styles.module.scss';


const OverlayNav = ({ className='', handleCloseClick='' }) => {
  return (
    <div className={ styles.container }>
      <div className={ styles['x-icon-container'] } onClick={ handleCloseClick }>
        <IconX className={ styles['x-icon'] }/>
      </div>

      <nav className={ styles.menu }>
        <ul className={ styles['menu-list'] }>
          <li className={ styles['menu-item'] }>
            <Link to="/course-library/">home</Link>
          </li>
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
            <a href="https://itpro.tv/login/">log in</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


export default OverlayNav;
