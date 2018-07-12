import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { DevelopmentPath as Path } from 'Components/CareerPaths';

const SoftwareDevelopment = ({ data, location }) =>
  <Fragment>
    <Head location={ location } />
    <main className={ styles.Career }>

      <section className={ styles.Path }>
        <Path
          recommendedCourses={data.careerPath.recommended.courses}
          additionalCourses={data.careerPath.additional.courses}/>
      </section>

    </main>
  </Fragment>


export default SoftwareDevelopment;

export const pageQuery = graphql`
  query DevelopmentQuery {
    careerPath: careerPathsJson(name: {eq: "Development"}) {
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
