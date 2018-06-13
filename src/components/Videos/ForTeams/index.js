import React from 'react';
import Img from 'gatsby-image';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPlay } from 'Elements/Icons';
import styles from './styles.module.scss';


const ForTeamsVideo = ({ className='', videoImage }) => {
  const handlePlay = e => {
    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles['play-button'])[0];

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${styles['for-teams-iframe']}" width="560" height="315" src="https://www.youtube.com/embed/Pmv7FdzB55M?rel=0&amp;modestbranding=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <section className={ styles.container }>
      <div className={ styles.content }>

        <div className={ styles.intro }>
          <Hx className={ styles.title } color={ styles.offBlack } size="2">Track Your Team’s Results</Hx>
          <Para className={ styles.summary } color={ styles.darkGrey } size="2">Prove the ROI of your training spend with the ProPortal. Manage your seats, assign/un-assign team members and access monthly usage reports. See metrics like logins, viewing time, courses viewed, tracks completed and more.</Para>
        </div>

        <div id="background-video" className={ `${styles['for-teams-container']} ${className}` } onClick={ handlePlay }>
          <div id="vidwrap" className={ styles.vidwrap }></div>
          <IconPlay className={ styles['play-button'] }/>
          <Img outerWrapperClassName={ styles.img } sizes={ videoImage.sizes } alt="team video"/>
        </div>
      </div>
    </section>
  );
};


export default ForTeamsVideo;
