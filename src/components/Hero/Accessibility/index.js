import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro, title
} from './styles.module.scss';


const Accessibility = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>ITProTV Accessibility</Hx>
    </div>
  </section>

  ;


export default Accessibility;
