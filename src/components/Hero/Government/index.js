import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  capsule, intro,
  title, subtitle, link
} from './styles.module.scss';


const Government = ({ className='' }) => {
  return (
    <section className={ capsule }>
      <div className={ intro }>
        <Hx size="1" className={ title }>Online IT Training for Governments</Hx>
        <Para className={ subtitle }>Binge-worthy learning&trade; for your team</Para>
      </div>
    </section>

  );
};


export default Government;
