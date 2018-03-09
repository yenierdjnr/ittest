import React from 'react';

import styles from './styles.module.scss';
import { IconLaptop, IconPopcorn, IconCoin } from 'Elements/Icons';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';


const ForTeamsSummary = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.list }>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.laptop}` }>
            <IconLaptop />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">full course library</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Full course library for all IT needs - CompTIA, Cisco, Microsoft, Security, Cloud & more. Virtual labs and practice exams included. <TextLink size="1.6" weight="400" className={ styles['text-link']}>view courses</TextLink></Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.popcorn}` }>
            <IconPopcorn />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">binge-worthy learning</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Engaging hosts present info in a talk-show format. Watch on a desktop, mobile device, Apple TV, Roku, Fire TV & more.</Para>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.coin}` }>
            <IconCoin />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">ROI proven</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Easily justify your training spend with a dashboard showing usage and results across teams.</Para>
          </div>
        </li>
      </ul>
    </section>
  );
};


export default ForTeamsSummary;
