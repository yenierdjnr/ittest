import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  container, intro,
  title, subtitle, link
} from './styles.module.scss';


const Contact = ({ className='' }) => {
  return (
    <section className={ container }>
      <div className={ intro }>
        <Hx size="2" className={ title }>Contact Us</Hx>
        <Para className={ subtitle }>Our first company value is "we exist for our members." How can we help you?</Para>
      </div>
    </section>

  );
};


export default Contact;
