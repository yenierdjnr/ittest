import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CourseCategoryHero as Hero } from 'Components/Hero'
import styles from './styles.module.scss';


const CoursePage = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
      <title>{ data.course.name }</title>
      <meta name="description" content={ data.course.descriptionMD } />
    </Helmet>


    <section className={ styles.Hero }>
      <Hero title={ data.course.name }/>
    </section>

  </main>
);

export default CoursePage;

export const pageQuery = graphql`
  query CourseByPath {
    course: coursesJson {
      id
      name
      description
      descriptionMD
      length
      topics {
        title
      }
    }
  }
`;
