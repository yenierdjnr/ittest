import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import styles from './styles.module.scss';

const episodeLengthToString = (length) => {
    length = Number(length);
    var h = Math.floor(length / 3600);
    var m = Math.floor(length % 3600 / 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    return [hDisplay, mDisplay ];
}


const EpisodeDetails = props => {

  return (
    <section className={ styles.episodeDetails }>
      <Hx className={ styles.title } size="4" color={ styles.offBlack }>{ props.title }
        <span className={ styles.length }>
          {!!props.length &&
            <span>{ episodeLengthToString(props.length).join(' ') }</span>
          }
        </span>
      </Hx>
      <Para className={ styles.summary } color={ styles.greyDark }>{ props.description }</Para>
    </section>
  );
};


export default EpisodeDetails;
