import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPlay } from 'Elements/Icons';
import img from 'Images/forTeams_video@2x.png';
import styles from './styles.module.scss';


const TeamCerts = ({ className='' }) => {
  const handlePlay = e => {
    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles['play-button'])[0];

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${styles['for-teams-2-iframe']}" width="560" height="315" src="https://www.youtube.com/embed/YnK0TVELxZY?rel=0&amp;modestbranding=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }
  };

  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <Hx color={ styles.offBlack } size="2" className={ styles.intro }>Team earns 40 certifications  in 12 months</Hx>

        <div className={ styles.info }>
          <div id="background-video" className={ `${styles['video-container']} ${className}` } onClick={ handlePlay }>
            <div id="vidwrap" className={ styles.vidwrap }></div>
            <IconPlay className={ styles['play-button'] }/>
            <img className={ styles.img } src={ img } alt="team video"/>
          </div>

          <div className={ styles.testimonial }>
            <span className={ styles['quote-symbol']} >“</span>
            <div>
              <Para className={ styles.quote } color={ styles.offBlack } size="2.4">I had 110 engineers in the field and we had dozens of ITProTV accounts. Last year alone, they passed over 40 certs.</Para>
              <span className={ styles.author }>James Packer, Kirk ISS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TeamCerts;
