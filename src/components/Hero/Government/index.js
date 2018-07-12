import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';

import {
  capsule, intro,
  subtitle, title
} from './styles.module.scss';


const Government = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>Online IT Training for Governments</Hx>
      <Para className={ subtitle }>Binge-worthy learning&trade; for your team</Para>
    </div>
  </section>

  ;


export default Government;
