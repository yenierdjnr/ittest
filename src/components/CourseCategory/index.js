import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CourseCategoryHero as Hero } from 'Components/Hero'
import { Course } from 'Elements/Flags'
import styles from './styles.module.scss';


const CourseCategory = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
      <title>{ data.category.tagname }</title>
      <meta name="description" content={ data.category.contentShort } />
    </Helmet>


    <section className={ styles.Hero }>
      <Hero title={ data.category.tagname } description={ data.category.contentFull }/>
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
