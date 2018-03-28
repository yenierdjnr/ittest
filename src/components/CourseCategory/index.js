import React from 'react';
import PropTypes from 'prop-types';

import { CourseCategoryHero as Hero } from 'Components/Hero'
import { Course } from 'Elements/Flags'
import styles from './styles.module.scss';


const CourseCategory = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <section className={ styles.Hero }>
      <Hero title={ data.category.tagname }/>
    </section>

    <section className={ styles.Courses }>
      <ul className={ styles.list }>
        {data.category.courses.map(course => (
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
        courseLength
      }
    }
  }
`;