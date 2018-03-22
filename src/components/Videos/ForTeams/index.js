import React from 'react';

import img from 'Images/forTeams_video@2x.png';
import { IconPlay } from 'Elements/Icons';
import styles from '../styles.module.scss';


const ForTeamsVideo = ({ className='' }) => {
  const handlePlay = e => {
    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles['play-button'])[0];

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${styles['for-teams-iframe']}" width="560" height="315" src="https://www.youtube.com/embed/ADZ7FZBh4B4?rel=0&amp;modestbranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <div id="background-video" className={ `${styles['for-teams-container']} ${className}` } onClick={ handlePlay }>
      <div id="vidwrap" className={ styles.vidwrap }></div>
      <IconPlay className={ styles['play-button'] }/>
      <img className={ styles.img }src={ img } alt="team video"/>
    </div>
  );
};


export default ForTeamsVideo;



