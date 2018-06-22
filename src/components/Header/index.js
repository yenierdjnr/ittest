import React from 'react';

import Logo from 'Components/Logo';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Header = ({ pathname }) => {
  return (
    <header className={ styles.capsule }>
      <Logo className={ styles['logo-box'] }/>

      <div className={ styles.nav }>
        <Nav location={ pathname }/>
      </div>
    </header>
  );
}


export default Header;
