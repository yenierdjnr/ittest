import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { CoursesHero as Hero } from 'Components/Hero';
import CourseOptions from 'Components/CourseOptions';
import NewContent from 'Components/NewContent';
import FreeCourses from 'Components/FreeCourses';
import styles from './courses.module.scss';



const CourseLibrary = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.courses }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <CourseOptions tagCategories={ data.tagCategories.edges.map((edge) => edge.node) } />
      </section>

      <section className={ styles.NewContent }>
        <NewContent />
      </section>

      <section className={ styles.FreeCourses }>
        <FreeCourses />
      </section>
    </main>
  </Layout>

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
