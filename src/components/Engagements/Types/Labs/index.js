import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';
import styles from '../styles.module.scss';


if (typeof navigator !== `undefined`) {
  var ani = require('Animations/ITP_Servers_1.hyperesources/itpservers1_hype_generated_script.js');
}

const Labs = props => {
  const { className='' } = props;

  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ `${styles['info']} ${styles['info--flip']}` }>
        <span className={ styles['sequence-num'] }>_02</span>
        <Hx className={ styles.title } color={ styles.offBlack }>Hands-on Learning with Hosted Virtual Labs</Hx>
        <Para className={ `${styles.summary} ${styles.labs}` } color={ styles.offBlack }>Try out your skills on virtual machine labs with multiple instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device,  and Windows platform.</Para>
        <TextLink to="/vlabs/" className={ styles.link } color={ styles.orangePrimary }>view vitural labs</TextLink>
      </div>
      <div className={ `${styles['img-box']} ${styles['img-box--flip']}` }>
        <div id="itpservers1_hype_container" className={ styles['img-labs'] } style={{ margin:'auto', position:'relative', width:'400px',height:'400px',overflow:'hidden' }}>
          <script type="text/javascript" charSet="utf-8" src={ `${ani}?58403` }></script>
        </div>
      </div>
    </div>
  );
};


export default Labs;
