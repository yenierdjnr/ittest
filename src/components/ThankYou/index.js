import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';
import TextLink from 'Elements/TextLink';


const ThankYouContent = props => {
  const { className='' } = props;

  return (
    <section className={ styles.capsule }>
      <div className={ styles.content }>
        <Hx size="1" className={ styles['title'] } color={ styles.offBlack } size="2">Thank you! We received your request.</Hx>
        <Para className={ styles['subtitle'] } color={ styles.offBlack } size="4">A team member will be in contact shortly.</Para>
        <div className={ styles.details }>
          <Para color={ styles.greyDark }>To ensure you'll receive the information you requested, please perform one of the following based on your email client:</Para>
          <Para color={ styles.greyDark }>Outlook: <TextLink className={ styles.link } to="">Add us to a Safe Senders List</TextLink><br/>
          Gmail: <TextLink className={ styles.link } to="">Create a contact</TextLink></Para>
        <Para color={ styles.greyDark }>To get a flavor of what fun &amp; engaging IT training looks like, check out the free courses in the ITProTV course library. You'll be hooked!</Para>
          <TextLink className={ styles.link } to="">View course library</TextLink>
        </div>
      </div>
    </section>
  );
};


export default ThankYouContent;
