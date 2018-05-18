import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { Labs } from 'Elements/Flags';
import styles from './styles.module.scss';

class Display extends Component {
  render() {
    const { labs, className='' } = this.props;

    return (
      <section className={ `${className} ${styles.container}` }>
        <Para className={ styles.info } color={ styles.greyDark }>Get on-demand access to cloned virtual machine environments. Access hands-on labs without expensive hardware or complex set up. You can run your virtual machine labs with multiple instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device and of course, Windows platform.</Para>
        <div className={ styles.article }>
          {
            labs.map((labs, i) => {
              return <Labs key={ i } name={ labs.name } />;
            })
          }
        </div>
      </section>
    );
  }
};

export default Display;
