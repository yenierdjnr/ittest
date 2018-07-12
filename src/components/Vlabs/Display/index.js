import React, { Component } from 'react';

import { Labs } from 'Elements/Flags';
import styles from './styles.module.scss';

class Display extends Component {
  render() {
    const { labs, className='' } = this.props;

    return (
      <section className={ `${className} ${styles.capsule}` }>

        <div className={ styles.article }>
          {
            labs.map((i) => <Labs key={ i } name={ labs.name } />)
          }
        </div>
      </section>
    );
  }
}

export default Display;
