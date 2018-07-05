import React from 'react';

import Logo from 'Components/Logo';
import Para from 'Elements/Para';
import { IconAlert } from 'Elements/Icons';
import { HeaderNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Header = ({ pathname }) => {
  return (
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
      <div className={ styles.ieBannerWrap }>
        <div className={ styles.ieBanner }>
          <IconAlert className={ styles.icon } /><Para className={ styles.title } color={ styles.purplePrimary }>Best viewed in a larger browser window, Edge, Chrome, or FireFox.</Para>
        </div>
      </div>
    </header>
  );
}


export default Header;
