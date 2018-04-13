import React from 'react';
import PropTypes from 'prop-types';

import { CareerPathCourses } from 'Elements/Flags'
import styles from './styles.module.scss';


const EntryLevelITPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (

  <main className={ styles.category }>

    <section className={ styles.RecommendedCourses }>
      <h2>Recommended Training for Certification</h2>
      <ul className={ styles.list }>
        {recommendedCourses.map(course => (
          <CareerPathCourses
            key={ course.id }
            title={ course.name }
            description={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>

    <section className={ styles.AdditionalCourses }>
      <h2>Additional Training</h2>
      <ul className={ styles.list }>
        {additionalCourses.map(course => (
          <CareerPathCourses
            key={ course.id }
            title={ course.name }
            description={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>
  </main>
);

export default EntryLevelITPath;
