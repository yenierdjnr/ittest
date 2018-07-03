import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconBars, IconCamera, IconMobile } from 'Elements/Icons';


const TeamNeeds = (props) => 
  <section className={ styles.capsule }>
    <ul className={ styles.content }>
      <li className={ styles.item }>
        <div className={ `${styles['icon-box']} ${styles.camera}` }>
          <IconCamera />
        </div>
        <Hx className={ styles.title } size="4">New Content Added Every Day</Hx>
        <Para className={ styles.summary }>IT changes all the time. We're live every day and content goes studio-to-web in 24 hours.</Para>
      </li>
      <li className={ styles.item }>
        <div className={ `${styles['icon-box']} ${styles.bars}` }>
          <IconBars />
        </div>
        <Hx className={ styles.title } size="4">Everything Your IT Team Needs</Hx>
        <Para className={ styles.summary }>Get all of your training in one convenient place. All of the major vendors and subjects are taught by experienced IT experts.</Para>
      </li>
      <li className={ styles.item }>
        <div className={ `${styles['icon-box']} ${styles.mobile}` }>
          <IconMobile />
        </div>
        <Hx className={ styles.title } size="4">Flexible Training for Teams On-the-Go</Hx>
        <Para className={ styles.summary }>Train when and where you want. Access content via the web, iOS, Android, Fire TV, Roku, and Apple TV.</Para>
      </li>
    </ul>
  </section>
  ;


export default TeamNeeds;
