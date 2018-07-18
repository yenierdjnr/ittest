import React from 'react';
import Img from "gatsby-image";

import { IconPlay } from 'Elements/Icons';
import styles from './styles.module.scss';


const OnAir = ({ className='', bkImage }) => {
  const handlePlay = (e) => {
    const vidWrap = document.getElementById('vidwrap');

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${styles.onAirIframe}" width="560" height="315" src="https://www.youtube.com/embed/OJWewWysGcA?rel=0&amp;modestbranding=1&amp;autoplay=1&amp;controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <div id="background-video" className={ `${styles.capsule} ${className}` } onClick={ handlePlay }>
      <div id="vidwrap" className={ styles.vidwrap }></div>
      <IconPlay className={ styles.playButton }/>
      <Img fluid={ bkImage.fluid } alt="on air video"/>
    </div>
  );
};


export default OnAir;
