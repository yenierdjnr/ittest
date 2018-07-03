import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  capsule, intro,
  link, subtitle, title
} from './styles.module.scss';


const Accessibility = ({ className='' }) => 
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>ITProTV Accessibility</Hx>
    </div>
  </section>

  ;


export default Accessibility;
