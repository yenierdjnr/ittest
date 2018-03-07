import React from 'react';

import styles from './styles.module.scss';
import Search from 'Components/Search';


const CoursesHero = props => {
  return (
    <section className={ styles.container }>
      <h1 className={ styles.title }>courses</h1>
      <Search className={ styles.search }/>
    </section>
  );
};


export default CoursesHero;
