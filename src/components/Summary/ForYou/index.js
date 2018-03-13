import React from 'react';

import styles from './styles.module.scss';
import { IconGear, IconLaptop, IconPopcorn } from 'Elements/Icons';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';


const ForYouSummary = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.list }>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.laptop}` }>
            <IconLaptop />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">engaging courses</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>ITProTV blends entertainment, humor, and cutting edge technology with IT education and presents it all during a live broadcast. The shows are then organized by exam and exam objective or by technical skill.</Para>
            <TextLink className={ styles['text-link']}>view courses</TextLink>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.popcorn}` }>
          <IconGear />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">build your career</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Technology changes every day requiring a good IT Pro to continually learn in order to stay up to date. With the most relevant IT training available, ITProTV can help you advance your career and keep you relevant.</Para>
            <TextLink className={ styles['text-link']}>view pland & pricing</TextLink>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.coin}` }>
            <IconPopcorn />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">binge-worthy learning</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Technology changes every day requiring a good IT Pro to continually learn in order to stay up to date. With the most relevant IT training available, ITProTV can help you advance your career and keep you relevant.</Para>
            <TextLink className={ styles['text-link']}>start free trial</TextLink>
          </div>
        </li>
      </ul>
    </section>
  );
};


export default ForYouSummary;
