import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { ITManagementAndStrategyPath as Paths } from 'Components/CareerPaths';

const ITManagementAndStrategy = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>

        <section>
          <Paths
              recommendedCourses={data.careerPath.recommended.courses}
              additionalCourses={data.careerPath.additional.courses}/>
        </section>

      </main>
    </Fragment>
  );
}

export default ITManagementAndStrategy;


export const pageQuery = graphql`
  query InformationManagementQuery {
    careerPath: careerPathsJson(name: {eq: "IT Management and Strategy"}) {
      name
      recommended {
        courses {
          id
        	name
          subtitle
          url
          level
        }
      }
      additional {
        courses {
          id
        	name
          subtitle
          url
          level
        }
      }
    }
  }
`;
