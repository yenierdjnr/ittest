import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  container, intro,
  title, subtitle, link
} from './styles.module.scss';


const OnAir = ({ className='' }) => {
  return (
    <section className={ container }>
      <div className={ intro }>
        <Hx size="2" className={ title }>See what's happening right now in the ITProTV studios. </Hx>
        <Para size="2.4"className={ subtitle }>Catch pre-recorded sessions when we're not live. A free, no-obligation membership is required for live sessions and to access chat.</Para>
        <ButtonLink className={ link }>Join for Free</ButtonLink>
      </div>
    </section>
  );
};


export default OnAir;
