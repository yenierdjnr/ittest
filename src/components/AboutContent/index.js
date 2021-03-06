import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AboutContent = () =>
  <section className={ styles.capsule }>
    <div className={ styles.row }>
      <div className={ styles.col }>
        <Hx size="1" className={ styles.subtitle } color={ styles.offBlack }>About ITProTV</Hx>
        <Para className={ styles.content } color={ styles.greyDark }>ITProTV takes the best aspects of in-person training and delivers it online and on-demand. Attractive studios, engaging hosts, and effective content make ITProTV the choice of IT professionals globally.</Para>
      </div>
    </div>
    <div className={ styles.row }>
      <div className={ styles.col }>
        <Hx size="2" className={ styles.subsection } color={ styles.offBlack }>Take a Virtual Tour of the Studios</Hx>
        <div className={ styles.iframe }>
          <iframe className={ styles.responsiveItem } src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1484679233708!6m8!1m7!1sxEbQtSYgA6cAAAQ7LvxqHw!2m2!1d29.6553720321947!2d-82.4234055060682!3f174.43994796036515!4f-10.892615850059997!5f0.7820865974627469" align="center" title="AboutFrame" allowFullScreen>
          </iframe>
        </div>
        <Para className={ styles.tourContent } color={ styles.greyDark }>In Gainesville? Let us know you're coming by for a tour: <a className={ styles.email } href="mailto:support@itpro.tv">support@itpro.tv</a>.</Para>
      </div>
    </div>
  </section>
  ;


export default AboutContent;
