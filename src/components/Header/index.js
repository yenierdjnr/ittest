import React from 'react';

import Logo from 'Components/Logo';
import styles from './styles.module.scss';


const Header = () => {
  return (
    <header className={ styles['page-header'] }>
      <Logo className={ styles['page-header__logo-box'] }/>

      <nav className={ styles['page-header__menu'] }>
        <ul>
          <li className={ styles['page-header__menu-item'] }>
            <a href="#">course library</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="#">on air</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="#">pricing</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="#">for teams</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a href="#">for you</a>
          </li>
          <li className={ styles['page-header__menu-item'] }>
            <a className={ styles['page-header__login-link'] } href="#">log in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;