import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro, title
} from './styles.module.scss';


const PracticeTests = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>Practice Tests</Hx>
    </div>
  </section>

  ;


export default PracticeTests;
