import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const EpisodeExtras = ({ data, transcript }) => {

  return (
    <section className={ styles.episodeExtras }>
      <ul className={ styles.extrasMenu }>
        <li>
          Transcript
        </li>
      </ul>
      <div className={ styles.extrasContainer }>
        <Para color={ styles.greyDark } className={ styles.summary }>{ transcript }</Para>
      </div>
    </section>
  );
};


export default EpisodeExtras;
