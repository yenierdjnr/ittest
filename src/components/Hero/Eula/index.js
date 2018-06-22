import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  capsule, intro,
  title, subtitle, link
} from './styles.module.scss';


const Eula = ({ className='' }) => {
  return (
    <section className={ capsule }>
      <div className={ intro }>
        <Hx size="1" className={ title }>Terms and Conditions of Use</Hx>
      </div>
    </section>

  );
};


export default Eula;
