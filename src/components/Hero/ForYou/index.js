import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';


const ForYouHero = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles['intro'] }>
        <Hx size="1" className={ styles['title'] }>Learn IT, Pass Your Certs, &amp; Accelerate Your Career</Hx>
        <Para className={ styles['subtitle'] }>Whether you're new to IT or a pro, binge on TV that will change your life.</Para>
        <ButtonLink to="/plans/">start free trial</ButtonLink>
      </div>
    </section>
  );
};


export default ForYouHero;
