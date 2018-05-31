import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { CoursePageHero as Hero } from 'Components/Hero'
import styles from './styles.module.scss';


const CoursePage = ({ data, ...rest }) => (
  <main className={ styles.category }>

    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
      <title>{ data.course.name }</title>
      <meta name="description" content={ data.course.descriptionMD } />
    </Helmet>


    <section className={ styles.Hero }>
      <Hero title={ data.course.name } subtitle={ data.course.subtitle } length={ data.course.length } />
    </section>

  </main>
);

export default CoursePage;

export const pageQuery = graphql`
  query CourseByPath {
    course: coursesJson {
      id
      name
      subtitle
      description
      descriptionMD
      length
      topics {
        title
      }
    }
  }
`;
