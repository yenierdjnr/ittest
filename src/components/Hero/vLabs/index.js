import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  container, intro,
  title, subtitle, link
} from './styles.module.scss';


const vLabs = ({ className='' }) => {
  return (
    <section className={ container }>
      <div className={ intro }>
        <Hx size="2" className={ title }>Virtual Labs</Hx>
        <Para className={ subtitle }>Try your new skilss in a risk-free environment</Para>
      </div>
    </section>

  );
};


export default vLabs;
