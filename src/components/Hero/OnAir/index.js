import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  capsule, intro,
  link, subtitle, title
} from './styles.module.scss';


const OnAir = ({ className='' }) => 
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="2" className={ title }>See What's Happening Right Now in the ITProTV Studios</Hx>
      <Para className={ subtitle }>Catch pre-recorded sessions when we're not live. A free, no-obligation membership is required for live sessions and to access chat.</Para>
      <ButtonLink className={ link } to="/plans/">Join for Free</ButtonLink>
    </div>
  </section>
  ;


export default OnAir;
