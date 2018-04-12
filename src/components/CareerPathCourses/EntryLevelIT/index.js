import React from 'react';
import PropTypes from 'prop-types';

import { CareerPath } from 'Elements/Flags'
import styles from './styles.module.scss';


const EntryLevelIT = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <section className={ styles.CareerPath }>
      <ul className={ styles.list }>
        {data.careerPath.recommended.courses.map(course => (
          <Course
            key={ course.id }
            title={ course.name }
            subtitle={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>

    <section className={ styles.CareerPath }>
      <ul className={ styles.list }>
        {data.careerPath.additional.courses.map(course => (
          <Course
            key={ course.id }
            title={ course.name }
            subtitle={ course.subtitle }
            level={ course.level }
          />
        ))}
      </ul>
    </section>
  </main>
);

export default EntryLevelIT;

export const pageQuery = graphql`
  query CareerPathByCourse($name: String) {
    careerPath: careerPathsJson(name: {eq:$name}) {
      name
      recommended {
        courses {
          id
        	name
          subtitle
          url
          level
        }
      }
      additional {
        courses {
          id
        	name
          subtitle
          url
          level
        }
      }
    }
  }
`;
