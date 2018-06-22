import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const ContactSupport = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ `${styles['text-center']} ${styles.colXS12}` }>
        <Hx className={ styles.subsection } color={ styles.offBlack }>Got a question outside of support hours?</Hx>
        <Para className={ styles.supportText } color={ styles.greyDark } >Your question will be answered as soon as possible. Issues about site access/availability will be answered first.</Para>
      </div>
    </section>
  );
};


export default ContactSupport;
