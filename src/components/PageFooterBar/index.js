import React from 'react';

import { IconTW, IconFB, IconLN, IconYT } from 'Elements/Icons';
import styles from './styles.module.scss';


const PageFooterBar = props => {
  const { className } = props;

  return (
    <footer className={ className }>
      <span className={ styles['page-footer-bar__copyright'] }>© ITProTV 2018</span>
      <div className={ styles['page-footer-bar__social-media'] }>
        <IconTW />
        <IconFB />
        <IconLN />
        <IconYT />
      </div>
    </footer>
  );
}


export default PageFooterBar;