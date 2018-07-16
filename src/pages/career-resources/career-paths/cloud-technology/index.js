import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { CloudTechnologyPath as Path } from 'Components/CareerPaths';

const CloudTechnology = ({ data, location }) =>
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


export default CloudTechnology;

export const pageQuery = graphql`
  query CloudTechnologyQuery {
    careerPath: careerPathsJson(name: {eq: "Cloud Technology"}) {
      name
      recommended {
        courses {
        	name
          subtitle
          url
          tagUrl
          level
        }
      }
      additional {
        courses {
        	name
          subtitle
          url
          tagUrl
          level
        }
      }
    }
  }
`;
