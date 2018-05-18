import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ViewportAnimation } from 'Elements/Viewport'
import { IconGear, IconLaptop, IconPopcorn } from 'Elements/Icons';


const ContactContent = props => {
  return (
    <section className={ styles.container }>
    
      <ViewportAnimation>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
              <IconLaptop className={ styles['laptop-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Check the FAQ</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Information about your membership, supported platforms, upgrading your plan, accessing labs & exams, and more in the FAQ section.</Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
            <IconGear className={ styles['gear-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Q&A Forum</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Interact with hosts and subject matter experts on technical questions about course content for your IT career in the Q&A forum.</Para>
            </div>
          </li>
          <li className={ `${styles.item} ${styles.binge}` }>
            <div className={ styles['icon-box'] }>
              <IconPopcorn className={ styles['popcorn-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Reach out</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Phone, chat and email support is available Monday - Thursday 7 a.m. - 7 p.m. Eastern and Friday 7 a.m. - 5 p.m. Eastern. Email us at support@itpro.tv or call us at 352-600-6900.</Para>
            </div>
          </li>
        </ul>
      </ViewportAnimation>

    </section>
  );
};


export default ContactContent;
