import React from 'react';

import styles from './courseLibrary.module.scss';
import { CoursesHero as Hero } from 'Components/Hero';
import CourseOptions from 'Components/CourseOptions';
import NewContent from 'Components/NewContent';
import FreeCourses from 'Components/FreeCourses';


const CourseLibrary = props => {
  return (
    <main className={ styles.courses }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <CourseOptions />
      </section>

      <section className={ styles['New-Content'] }>
        <NewContent />
      </section>

      <section className={ styles['Free-Courses'] }>
        <FreeCourses />
      </section>
    </main>
  );
}


export default CourseLibrary;
