import React, { Component } from 'react';

import styles from './styles.module.scss';
import Menu from './Menu';
import Display from './Display';


class CourseOptions extends Component {
  render() {
    return (
      <section className={ styles.container }>
        <Menu />
        <Display />
      </section>
    );
  }
}


export default CourseOptions;
