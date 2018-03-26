import React from 'react';

import styles from './courseLibrary.module.scss';
import { CoursesHero as Hero } from 'Components/Hero';
import CourseOptions from 'Components/CourseOptions';
import NewContent from 'Components/NewContent';
import FreeCourses from 'Components/FreeCourses';


const CourseLibrary = props => {
  console.log('props', props);
  return (
    <main className={ styles.courses }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <CourseOptions tagCategories={props.data.tagCategories.edges.map(edge => edge.node)} />
      </section>

      <section className={ styles['New-Content'] }>
        <NewContent />
      </section>

      <section className={ styles['Free-Courses'] }>
        <FreeCourses />
      </section>
    </main>
  );
}


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
