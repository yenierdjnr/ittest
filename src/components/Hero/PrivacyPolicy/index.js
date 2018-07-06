import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro, title
} from './styles.module.scss';


const PrivacyPolicy = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>Privacy Policy</Hx>
    </div>
  </section>

  ;


export default PrivacyPolicy;
