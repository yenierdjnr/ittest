import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro, title
} from './styles.module.scss';


const Eula = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>Terms and Conditions of Use</Hx>
    </div>
  </section>

  ;


export default Eula;
