import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import styles from './styles.module.scss';


const PageNotFoundHero = ({ className='' }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.intro }>
        <div className={ styles['col-12'] }>
          <Hx size="1" className={ styles.title }>404 - Page Not Found</Hx>
        </div>
      </div>
    </section>

  );
};


export default PageNotFoundHero;
