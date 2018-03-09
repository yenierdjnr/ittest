import React from 'react';
import styles from '../styles.module.scss';

import { IconPlay } from 'Elements/Icons';


const ForTeamsVideo = ({ className='' }) => {
  return (
    <div className={ `${styles['for-teams-container']} ${className}`}>
      <IconPlay className={ styles['play-button'] }/>
    </div>
  );
};


export default ForTeamsVideo;
