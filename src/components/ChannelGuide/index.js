import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { OnAir as Video } from 'Components/Videos';
import styles from './styles.module.scss';


const ChannelGuide = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.calendar }>
        <div className={ styles.intro }>
          <Hx className={ styles.title } color={ styles.darkGrey } >ITPROTV CHANNEL GUIDE</Hx>
          <Para className={ styles.subtitle } color={ styles.darkGrey }>All events shown in US Eastern time.</Para>
        </div>
        <iframe className={ styles.frame } src="https://www.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23f9f9fA&amp;src=edutainmentlive.com_jkvaqqr16st1l837d6uqdsria4%40group.calendar.google.com&amp;color=%23f9f9fA&amp;ctz=America%2FNew_York" style={{ borderWidth:0 }} frameBorder="0" scrolling="no" wmode="Opaque"></iframe>
      </div>
      <div className={ styles.video }>
        <Video />
      </div>
    </section>
  );
}


export default ChannelGuide;
