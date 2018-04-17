import React from 'react';
import PropTypes from 'prop-types';

import Hx from 'Elements/Hx';
import { CareerPathCourses } from 'Elements/Flags'
import styles from './styles.module.scss';


const EntryLevelITPath = ({ data, recommendedCourses, additionalCourses, ...rest }) => (

  <main>

    <section className={ styles.RecommendedCourses }>
      <div className ={ styles.label }>
        <Hx className={ styles.title } color={ styles.headingColor } size="5">Recommended Training for Certification</Hx>
      </div>
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

      <div className ={ styles.label }>
        <Hx className={ styles.title } color={ styles.headingColor } size="5">Additional Training</Hx>
      </div>
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
