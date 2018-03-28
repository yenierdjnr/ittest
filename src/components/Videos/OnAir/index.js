import React from 'react';

import { IconPlay } from 'Elements/Icons';
import img from 'Images/onAir_video@1x.jpg';
import styles from './styles.module.scss';


const OnAir = ({ className='' }) => {
  const handlePlay = e => {
    const vidWrap = document.getElementById('vidwrap');

    if (vidWrap) {
      // vidWrap.innerHTML = `<iframe class="${styles['for-teams-iframe']}" width="560" height="315" src="https://www.youtube.com/embed/ADZ7FZBh4B4?rel=0&amp;modestbranding=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <div id="background-video" className={ `${styles['container']} ${className}` } onClick={ handlePlay }>
      <div id="vidwrap" className={ styles.vidwrap }></div>
      <IconPlay className={ styles['play-button'] }/>
      {/*<img className={ styles.img } src={ img } alt="on air video"/>*/}
    </div>
  );
};


export default OnAir;
