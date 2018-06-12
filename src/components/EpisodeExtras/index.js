import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';


const EpisodeExtras = ({ data, onContentToggle, transcript, showNotes, extras }) => {

  return (
    <section className={ styles.episodeExtras }>
      <ul className={ styles.extrasMenu }>
        <li className={ extras === 'transcript' ? styles.active : styles.greyDark } onClick={ () => onContentToggle() }>
          Transcript
        </li>
        <li className={ extras === 'notes' ? styles.active : styles.greyDark } onClick={ () => onContentToggle() }>
          { showNotes && <span size="4">Show Notes</span> }
        </li>
      </ul>
      <div className={ styles.extrasContainer }>
        { extras === 'transcript' && <Para color={ styles.greyDark } className={ styles.summary }>{ transcript }</Para>}
      </div>
      <div className={ styles.extrasContainer }>
        { extras === 'notes' && <Para color={ styles.greyDark } className={ styles.summary }>{ showNotes }</Para>}
      </div>
    </section>
  );
};


export default EpisodeExtras;
