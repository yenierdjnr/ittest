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
            labs.map((lab, i) => <Labs key={ i } name={ lab.name } />)
          }
        </div>
      </section>
    );
  }
}

export default Display;
