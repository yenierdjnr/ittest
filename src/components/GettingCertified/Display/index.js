import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import { Resource } from 'Elements/Flags';
import styles from './styles.module.scss';

class Display extends Component {
  render() {
    const { resources, className='' } = this.props;

    return (
      <section className={ `${className} ${styles.capsule}` }>
        <div className={ styles.article }>
          {
            resources.map((resource, i) => {
              return <Resource key={ i } title={ resource.title } description={ resource.description } url={ resource.url } />;
            })
          }
        </div>
      </section>
    );
  }
};

export default Display;
