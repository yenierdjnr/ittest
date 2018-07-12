import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro,
  title
} from './styles.module.scss';


const PodcastHero = ({ className='' }) => {
  return (
    
    <section className={ capsule }>
      <div className={ intro }>
        <Hx size="1" className={ title }>IT Podcasts</Hx>
      </div>
    </section>

  );
};


export default PodcastHero;
