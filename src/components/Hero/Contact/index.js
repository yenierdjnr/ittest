import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';

import {
  capsule, intro,
  subtitle, title
} from './styles.module.scss';


const Contact = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="2" className={ title }>Contact ITProTV</Hx>
      <Para className={ subtitle }>A team of service and success representatives are ready to serve you.</Para>
    </div>
  </section>

  ;


export default Contact;
