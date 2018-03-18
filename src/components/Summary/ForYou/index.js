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
            <Para color={ styles.greyDark } className={ styles.subtitle }>A talk-show style format keeps you interested and excited to learn. New content is added every day.</Para>
            <TextLink className={ styles['text-link']} to="/course-library/">view courses</TextLink>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.popcorn}` }>
          <IconGear />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">build your career</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Train to pass your certs and start or advance in IT. CompTIA, Cisco, Microsoft, AWS, cloud, security and more.</Para>
            <TextLink className={ styles['text-link']} to="/plans/">view pland & pricing</TextLink>
          </div>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.coin}` }>
            <IconPopcorn />
          </div>
          <div className={ styles.summary }>
            <Hx color={ styles.offblack } className={ styles.title } size="4">binge-worthy learning</Hx>
            <Para color={ styles.greyDark } className={ styles.subtitle }>Engaging content in a talk show format. Watch on a desktop, mobile device, Apple TV, Roku or Fire TV.</Para>
            <TextLink className={ styles['text-link']} to="/plans/">start free trial</TextLink>
          </div>
        </li>
      </ul>
    </section>
  );
};


export default ForYouSummary;