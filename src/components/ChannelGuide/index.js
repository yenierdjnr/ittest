import React, { Component } from 'react';

import styles from './styles.module.scss';
import { OnAir as Video } from 'Components/Videos';


const ChannelGuide = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.calendar }>
        <iframe className={ styles.frame } src="https://www.google.com/calendar/embed?showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23e5ecf9&amp;src=edutainmentlive.com_jkvaqqr16st1l837d6uqdsria4%40group.calendar.google.com&amp;color=%23e5ecf9&amp;ctz=America%2FNew_York" style={{ borderWidth:0, width:'100%' }} frameBorder="0" scrolling="no" wmode="Opaque"></iframe>
      </div>
      <div className={ styles.video }>
        <Video />
      </div>
    </section>
  );
}


export default ChannelGuide;
