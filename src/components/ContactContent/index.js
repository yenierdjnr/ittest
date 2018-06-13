import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ViewportAnimation } from 'Elements/Viewport'
import { IconBubbles, IconQuestionMark, IconPhone } from 'Elements/Icons';


const ContactContent = props => {
  return (
    <section className={ styles.container }>

      <ViewportAnimation>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
              <IconQuestionMark className={ styles['laptop-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Check the FAQ</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Information about your membership, supported platforms, upgrading your plan, accessing labs &amp; exams, and more in the <a className={ styles['link'] } href="https://help.itpro.tv/">FAQ section</a>.</Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
            <IconBubbles className={ styles['gear-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Q&A Forum</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Interact with hosts and subject matter experts on technical questions about course content for your IT career in the <a className={ styles['link'] } href="https://forums.itpro.tv/">Q&amp;A Forum</a>.</Para>
            </div>
          </li>
          <li className={ `${styles.item} ${styles.binge}` }>
            <div className={ styles['icon-box'] }>
              <IconPhone className={ styles['popcorn-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="4">Reach out</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Phone, chat, and email support is available Monday - Thursday 7 a.m. - 7 p.m. Eastern and Friday 7 a.m. - 5 p.m. Eastern. Email us at <a className={ styles['email'] } href="mailto:support@itpro.tv">support@itpro.tv</a> or call us at
              <a className={ styles['tel'] } href="tel:+13526006900"> 352-600-6900.</a>
              </Para>
            </div>
          </li>
        </ul>
      </ViewportAnimation>

    </section>
  );
};


export default ContactContent;
