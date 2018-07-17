import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import WebinarLogo from 'Images/webinar-logo.png';

import styles from './styles.module.scss';


const WebinarHero = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.container }>
        <div className={ styles.row }>
          <div className={ styles.subtext }>
            <Hx size="1" color={ styles.offBlack } className={ styles.title }>ITProTV Webinars</Hx>
            <Para color={ styles.offBlack }>Take an hour out of your day to brush up on a hot topic in IT. Join the ITProTV subject matter experts for IT Pro in the Know - the ITProTV webinar series. Engage in the live broadcast or watch on demand at your convenience.</Para>
          </div>
          <div className={ styles.logo }>
            <img src={ WebinarLogo } className={ styles.imgLogo } />
          </div>
        </div>
      </div>
    </section>

  );
};


export default WebinarHero;
