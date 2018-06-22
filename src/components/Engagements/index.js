import React from 'react';

import styles from './styles.module.scss';
import { Courses, Labs, Exams } from './Types';


const Engagements = props => {
  return (
    <section className={ styles.capsule }>
      <Courses className={ styles.courses } />
      <Labs className={ styles.labs } />
      <Exams className={ styles.exams } />
    </section>
  );
};


export default Engagements;
