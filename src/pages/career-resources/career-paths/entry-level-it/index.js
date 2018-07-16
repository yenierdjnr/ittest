import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';

import styles from '../careerPaths.module.scss';
import { EntryLevelITPath as Path } from 'Components/CareerPaths';

const EntryLevelIT = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>

      <section className={ styles.Path }>
        <Path
          recommendedCourses={data.careerPath.recommended.courses}
          additionalCourses={data.careerPath.additional.courses}/>
      </section>

    </main>
  </Layout>


export default EntryLevelIT;

export const pageQuery = graphql`
  query EntryLevelQuery {
    careerPath: careerPathsJson(name: {eq: "Entry Level IT"}) {
      name
      recommended {
        courses {
        	name
          subtitle
          tagUrl
          url
          level
        }
      }
      additional {
        courses {
        	name
          subtitle
          tagUrl
          url
          level
        }
      }
    }
  }
`;
