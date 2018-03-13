import React from 'react';
import styles from './styles.module.scss';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPlay } from 'Elements/Icons';


const ForYouVideo = ({ className='' }) => {
  return (
    <section className={ styles.container }>
      <div className={ `${styles['video-container']} ${className}` }>
        <IconPlay className={ styles['play-button'] }/>
      </div>
      <div className={ styles.intro }>
        <Hx className={ styles.title } color={ styles.offBlack } size="2">Learn more & enjoy watching</Hx>
        <Para className={ styles.summary } color={ styles.darkGrey } size="2">ITProTV delivers the IT instruction that you need to advance or launch your IT career in a fun and creative way, With attractive studios and an interactive, talk-show style format, you'll watch more and learn more. See why in this video.</Para>
      </div>
    </section>
  );
};


export default ForYouVideo;
