import React from 'react';

import styles from './styles.module.scss';
import { Courses, Exams, Labs } from './Types';


const Engagements = () =>
  <section className={ styles.capsule }>
    <Courses className={ styles.courses } />
    <Labs className={ styles.labs } />
    <Exams className={ styles.exams } />
  </section>
  ;


export default Engagements;
