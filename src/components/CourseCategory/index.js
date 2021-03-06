import React from 'react';
import Helmet from 'react-helmet';
import Layout from 'Components/layout';
import { graphql } from 'gatsby';

import { CourseCategoryHero as Hero } from 'Components/Hero';
import { Course } from 'Elements/Flags';
import styles from './styles.module.scss';


const CourseCategory = ({ data, location }) => {
  if(!data.category)
  {
    return (
      <div>
            rest.location.pathname
      </div>
    );
  }
  else {
    return (
      <main className={ styles.category }>

        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
          <title>{ data.category.tagname }</title>
          <meta name="description" content={ data.category.contentFull } />
        </Helmet>

        <Layout location={ location }>
          <section className={ styles.Hero }>
            <Hero title={ data.category.tagname } description={ data.category.contentFull }/>
          </section>

          <section className={ styles.Courses }>
            <div className={ styles.row }>
              <div className={ styles.colXS12 }>
                <ul className={ styles.list }>
                  {data.category.courses.map((course) =>
                    <Course
                      key={ course.url }
                      url={ `/courses/${data.category.url}/${course.url}/` }
                      title={ course.name }
                      description={ course.subtitle }
                      courseLength={ course.courseLength }
                    />
                  )}
                </ul>
              </div>
            </div>
          </section>
        </Layout>

      </main>
    );
  }
};

export default CourseCategory;

export const pageQuery = graphql`
  query TagByPath($url: String) {
    category: tagsJson(url: {eq: $url}) {
      tagname
      url
      contentFull
      contentShort
      courses {
        url
        name
        subtitle
        courseLength
      }
    }
  }
`;
