import React from 'react';
import PropTypes from 'prop-types';

import { Course } from 'Elements/Flags'
import styles from './styles.module.scss';


const EntryLevelITPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (
  <main className={ styles.category }>

    <section className={ styles.Courses }>
      <h2>Recommended Training for Certification</h2>
      <ul className={ styles.list }>
        {recommendedCourses.map(course => (
          <Course
            key={ course.id }
            title={ course.name }
            description={ course.subtitle }
            courseLength={ course.courseLength }
          />
        ))}
      </ul>
    </section>

    <section className={ styles.Courses }>
      <h2>Additional Training</h2>
      <ul className={ styles.list }>
        {additionalCourses.map(course => (
          <Course
            key={ course.id }
            title={ course.name }
            description={ course.subtitle }
            courseLength={ course.courseLength }
          />
        ))}
      </ul>
    </section>
  </main>
);

export default EntryLevelITPath;
