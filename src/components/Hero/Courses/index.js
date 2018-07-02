import React from 'react';

import Hx from 'Elements/Hx';
import styles from './styles.module.scss';


const CoursesHero = ({ location }) => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.content }>
          <Hx className={ styles.title } size="1">courses</Hx>
        </div>
      </div>
    </section>
  );
};


export default CoursesHero;
