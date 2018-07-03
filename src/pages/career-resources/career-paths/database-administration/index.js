import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { DatabaseAdministrationPath as Path } from 'Components/CareerPaths';

const DatabaseAdministration = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
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
  

export default DatabaseAdministration;

export const pageQuery = graphql`
  query DatabaseAdministrationQuery {
    careerPath: careerPathsJson(name: {eq: "Database Administration"}) {
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
