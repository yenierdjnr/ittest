import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconBars, IconCamera, IconMobile } from 'Elements/Icons';


const TeamNeeds = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.content }>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.camera}` }>
            <IconCamera />
          </div>
          <Hx className={ styles.title } size="4">New content added every day</Hx>
          <Para className={ styles.summary }>IT changes all the time. We're live every day and content goes studio-to-web in 24 hours.</Para>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.bars}` }>
            <IconBars />
          </div>
          <Hx className={ styles.title } size="4">Everything your IT team needs</Hx>
          <Para className={ styles.summary }>Get all of your training in one convenient place. All of the major vendors and subjects, all current and all taught by experienced IT experts.</Para>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.mobile}` }>
            <IconMobile />
          </div>
          <Hx className={ styles.title } size="4">Flexible training for teams on-the-go</Hx>
          <Para className={ styles.summary }>Train when and where you want. Access content via the web, iOS, Android, FireTV, Roku and Apple TV.</Para>
        </li>
      </ul>
    </section>
  );
};


export default TeamNeeds;
