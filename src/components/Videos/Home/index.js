import React from 'react';
import styles from '../styles.module.scss';

import { IconPlay } from 'Elements/Icons';


const HomeVideo = props => {
  return (
    <div className={ styles.container }>
      <IconPlay className={ styles['play-button'] }/>
    </div>
  );
};


export default HomeVideo;
