import React from 'react';

import Logo from 'Components/Logo';
import styles from './styles.module.scss';


const Header = props => {
  return (
    <header className={ styles['page-header'] }>
      <Logo className={ styles['page-header__logo-box'] }/>

      <nav className={ styles['page-header__menu'] }>
        <ul>
          <li className={ styles['page-header__menu-item'] }>
            <a href="/course-library/">courses</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="/live/">on air</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="/plans/">pricing</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="/for-teams/">for teams</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="/for-you/">for you</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a className={ styles['page-header__login-link'] } href="#">log in</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a className={ styles['page-header__try-free'] } href="#">try it free</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;
