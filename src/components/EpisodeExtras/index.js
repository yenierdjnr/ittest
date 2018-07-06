import React from 'react';

import Para from 'Elements/Para';
import styles from './styles.module.scss';


const EpisodeExtras = ({ transcript }) =>
  <section className={ styles.episodeExtras }>
    <ul className={ styles.extrasMenu }>
      <li>
          Transcript
      </li>
    </ul>
    <div className={ styles.extrascapsule }>
      <Para color={ styles.greyDark } className={ styles.summary }>{ transcript }</Para>
    </div>
  </section>
  ;


export default EpisodeExtras;
