import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const EpisodeExtras = props => {

  return (
    <section className={ styles.episodeExtras }>
      <Hx className={ styles.title } size="4" color={ styles.offBlack }>Transcript</Hx>
      { props.hasNotes && <Hx className={ styles.title } size="4" color={ styles.offBlack }>Show Notes</Hx> }
      <Para className={ styles.summary } color={ styles.greyDark }>{ props.transcript }</Para>
      <Para className={ styles.summary } color={ styles.greyDark }>{ props.showNotes }</Para>
    </section>
  );
};


export default EpisodeExtras;
