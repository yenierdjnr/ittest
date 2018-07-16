import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { CybersecurityPath as Path } from 'Components/CareerPaths';

const Cybersecurity = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>

      <section className={ styles.Path }>
        <Path
          recommendedCourses={data.careerPath.recommended.courses}
          supportingCourses={data.careerPath.supporting.courses}
          additionalCourses={data.careerPath.additional.courses}/>
      </section>

    </main>
  </Layout>


export default Cybersecurity;

export const pageQuery = graphql`
  query CybersecurityQuery {
    careerPath: careerPathsJson(name: {eq: "Cybersecurity"}) {
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
      supporting {
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
