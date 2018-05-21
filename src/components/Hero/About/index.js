import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  container, intro,
  title, subtitle, link
} from './styles.module.scss';


const About = ({ className='' }) => {
  return (
    <section className={ container }>
      <div className={ intro }>
        <Hx size="2" className={ title }>Empowering the world through engaging learning</Hx>
        <Para className={ subtitle }>Online, on-demand IT training</Para>
      </div>
    </section>

  );
};


export default About;
