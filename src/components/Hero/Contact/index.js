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
        <Hx size="2" className={ title }>Contact ITProTV</Hx>
        <Para className={ subtitle }>A team of service and success representatives are ready to serve you.</Para>
      </div>
    </section>

  );
};


export default Contact;
