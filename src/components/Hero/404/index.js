import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  container, intro,
  title, subtitle, link
} from './styles.module.scss';


const PageNotFoundHero = ({ className='' }) => {
  return (
    <section className={ container }>
      <div className={ intro }>
        <Hx size="1" className={ title }>404 - Page Not Found</Hx>
      </div>
    </section>

  );
};


export default PageNotFoundHero;
