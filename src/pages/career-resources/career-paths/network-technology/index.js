import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { NetworkTechnologyPath as Paths } from 'Components/CareerPaths';

const NetworkTechnology = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
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

export default NetworkTechnology;

export const pageQuery = graphql`
  query NetworkTechnologyQuery {
    careerPath: careerPathsJson(name: {eq: "Network Technology"}) {
      name
      recommended {
        courses {
        	name
          subtitle
          url
          level
        }
      }
      additional {
        courses {
        	name
          subtitle
          url
          level
        }
      }
    }
  }
`;
