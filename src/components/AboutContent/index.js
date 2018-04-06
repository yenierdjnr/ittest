import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AboutContent = props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.subtitle } color={ styles.offBlack }>About ITProTV</Hx>
    </section>
  );
};


export default AboutContent;
