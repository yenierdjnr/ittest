import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { CoursesHero as Hero } from 'Components/Hero';
import CourseOptions from 'Components/CourseOptions';
import NewContent from 'Components/NewContent';
import FreeCourses from 'Components/FreeCourses';
import styles from './courses.module.scss';


const CourseLibrary = ({ data, history, location }) =>
  <Fragment>
    <Head location={ location } />
    <main className={ styles.courses }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <CourseOptions tagCategories={ data.tagCategories.edges.map((edge) => edge.node) } />
      </section>

      <section className={ styles['New-Content'] }>
        <NewContent />
      </section>

      <section className={ styles['Free-Courses'] }>
        <FreeCourses />
      </section>
    </main>
  </Fragment>



export default CourseLibrary;


export const query = graphql`
  query TagCategoryQuery {
      tagCategories: allTagCategoriesJson(sort: {order:ASC, fields: [weight]}) {
        edges {
          node {
            tagcategoryname,
            url,
            tags {
              tagname,
              url
            }
          }
        }
      }
    }
`;
