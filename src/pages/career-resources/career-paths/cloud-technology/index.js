import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { CloudTechnologyPath as Paths } from 'Components/CareerPaths';

const CloudTechnology = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
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
