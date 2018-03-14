import React from 'react';
import styles from '../styles.module.scss';

import { IconPlay } from 'Elements/Icons';


const OnAir = props => {
  return (
    <div className={ styles['on-air-container'] }>
      <IconPlay className={ styles['play-button'] }/>
    </div>
  );
};


export default OnAir;
