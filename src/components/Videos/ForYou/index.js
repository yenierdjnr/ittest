import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPlay } from 'Elements/Icons';
import img from 'Images/forTeams_video@2x.png';
import styles from './styles.module.scss';


const ForYouVideo = ({ className='' }) => {
  const handlePlay = e => {
    const vidWrap = document.getElementById('vidwrap');

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${styles['for-you-iframe']}" width="560" height="315" src="https://www.youtube.com/embed/inmvz4upUMU?rel=0&amp;modestbranding=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <div id="background-video" className={ `${styles['video-container']} ${className}` } onClick={ handlePlay }>
          <div id="vidwrap" className={ styles.vidwrap }></div>
          <IconPlay className={ styles['play-button'] }/>
          <img className={ styles.img }src={ img } alt="team video"/>
        </div>
        <div className={ styles.intro }>
          <Hx className={ styles.title } color={ styles.offBlack } size="2">Learn More & Enjoy Watching</Hx>
          <Para className={ styles.summary } color={ styles.darkGrey } size="2">ITProTV delivers the IT instruction that you need to advance or launch your IT career in a fun and creative way, with attractive studios and an interactive, talk-show style format, you'll watch more and learn more. See why in this video.</Para>
        </div>
      </div>
    </section>
  );
};


export default ForYouVideo;
