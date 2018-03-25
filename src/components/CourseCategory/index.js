import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { CourseCategoryHero as Hero } from 'Components/Hero'
import { Course } from 'Elements/Flags'

const CourseCategory = ({ data, ...rest }) => (
  <main className={ styles.category }>
    <section className={ styles.hero }>
      <Hero title={data.category.tagname} />
    </section>
    <section className={ styles.Courses }>
      <ul className={styles.CourseList}>
        {data.category.courses.map(course => (
          <Course
            key={course.id}
            title={course.name}
            description={course.subtitle}
          />
        ))}
      </ul>
    </section>
  </main>
);

export default CourseCategory;

export const pageQuery = graphql`
  query TagByPath($url: String) {
    category: tagsJson(url: {eq: $url}) {
      tagname
      contentFull
      contentShort
      courses {
        id
        name
        subtitle
      }
    }
  }
`;
