import React from 'react';

import Logo from 'Components/Logo';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Header = ({ pathname }) => 
  <header className={ styles.capsule }>
    <div className={ styles.centerNavRow }>
      <div className={ styles.navOutter }>
        <div className={ styles.navWrap }>
          <Logo className={ styles.logoBox }/>

          <div className={ styles.nav }>
            <Nav location={ pathname }/>
          </div>
        </div>
      </div>
    </div>
  </header>
  


export default Header;
