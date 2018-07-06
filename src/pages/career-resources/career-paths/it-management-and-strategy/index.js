import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { ITManagementAndStrategyPath as Path } from 'Components/CareerPaths';

const ITManagementAndStrategy = ({ data, location }) =>
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


export default ITManagementAndStrategy;


export const pageQuery = graphql`
  query InformationManagementQuery {
    careerPath: careerPathsJson(name: {eq: "IT Management and Strategy"}) {
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
