import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';

import styles from './styles.module.scss';

const About = () =>
  <section className={ styles.capsule }>
    <div className={ styles.intro }>
      <Hx size="2" className={ styles.title }>Empowering the World Through Engaging Learning</Hx>
      <Para className={ styles.subtitle }>Online, on-demand IT training</Para>
    </div>
  </section>

  ;


export default About;
