import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import styles from './styles.module.scss';


const WebinarHero = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.intro }>
        <Hx size="1" className={ styles.title }>ITProTV Webinars</Hx>
      </div>
    </section>

  );
};


export default WebinarHero;
