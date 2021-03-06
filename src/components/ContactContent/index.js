import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconBubbles, IconPhone, IconQuestionMark } from 'Elements/Icons';

const ContactContent = () =>
  <section className={ styles.capsule }>
    <div className={ `${styles.cols} ${styles.icon}` }>
      <div className={ styles.iconBox }>
        <IconQuestionMark className={ styles.faqSection }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="4">Check the FAQ</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>Information about your membership, supported platforms, upgrading your plan, accessing labs &amp; exams, and more in the <a className={ styles.link } href="https://help.itpro.tv/" target="_blank" rel="noopener noreferrer">FAQ section</a>.</Para>
      </div>
    </div>
    <div className={ `${styles.cols} ${styles.icon}` }>
      <div className={ styles.iconBox }>
        <IconBubbles className={ styles.forum }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="4">Q&A Forum</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>Interact with hosts and subject matter experts on technical questions about course content for your IT career in the <a className={ styles.link } href="https://forums.itpro.tv/" target="_blank" rel="noopener noreferrer">Q&amp;A Forum</a>.</Para>
      </div>
    </div>
    <div className={ `${styles.cols} ${styles.icon}` }>
      <div className={ styles.iconBox }>
        <IconPhone className={ styles.contact }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="4">Reach out</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>Phone, chat, and email support is available Monday - Thursday 7 a.m. - 7 p.m. Eastern and Friday 7 a.m. - 5 p.m. Eastern. Email us at <a className={ styles.email } href="mailto:support@itpro.tv">support@itpro.tv</a> or call us at
          <a className={ styles.tel } href="tel:+13526006900"> +1-352-600-6900.</a>
        </Para>
      </div>
    </div>
  </section>
  ;


export default ContactContent;
