import React from 'react';

import { IconTW, IconFB, IconLN, IconYT, IconInsta } from 'Elements/Icons';
import styles from './styles.module.scss';


const PageFooterBar = props => {
  const { className='' } = props;

  return (
    <footer className={ className }>
      <div className={ styles['social-media'] }>
        <a href="https://twitter.com/itprotv" target="_blank">
          <IconTW />
        </a>
        <a href="https://facebook.com/ITProTV" target="_blank">
          <IconFB />
        </a>
        <a href="https://www.linkedin.com/company/itprotv" target="_blank">
          <IconLN />
        </a>
        <a href="https://www.youtube.com/user/ITProTVChannel" target="_blank">
          <IconYT />
        </a>
        <a href="https://www.instagram.com/itpro.tv/" target="_blank">
          <IconInsta />
        </a>
      </div>
      <span className={ styles['copyright'] }>© ITProTV 2018</span>
    </footer>
  );
}


export default PageFooterBar;
