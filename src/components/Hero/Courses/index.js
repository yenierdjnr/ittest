import React from 'react';

import Hx from 'Elements/Hx';
import Search from 'Components/Search';
import styles from './styles.module.scss';


const CoursesHero = ({ location }) => {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <Hx className={ styles.title } size="1">courses</Hx>
        <Search className={ styles.search } location={ location }/>
      </div>
    </section>
  );
};


export default CoursesHero;
