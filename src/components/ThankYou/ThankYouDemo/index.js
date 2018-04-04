import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';
import TextLink from 'Elements/TextLink';


const ThankYouDemo = props => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <div className={ styles.content}>
        <div className={ styles.summary }>
          <Hx className={ styles.title } color={ styles.offBlack } size="2">Thank you! We received your request.</Hx>
          <Hx className={ styles.subtitle } color={ styles.offBlack } size="4">A team member will be in contact shortly.</Hx>
        </div>
        <div>
        <Para className={ styles.summary } color={ styles.greyDark }>To ensure you'll receive the information you requested, please perform one of the following based on your email client:</Para>
        <Para className={ styles.summary } color={ styles.greyDark }>Outlook: <TextLink className={ styles.link } to="">Add us to a Safe Senders List</TextLink></Para>
        </div>
      </div>
    </section>
  );
};


export default ThankYouDemo;
