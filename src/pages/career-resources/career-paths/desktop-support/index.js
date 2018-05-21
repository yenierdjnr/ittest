import React, { Fragment } from 'react';

import Head from 'Components/Head';

import styles from '../careerPaths.module.scss';
import { DesktopSupportPath as Paths } from 'Components/CareerPaths';

const DesktopSupport = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
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

export default DesktopSupport;

export const pageQuery = graphql`
  query DesktopSupportQuery {
    careerPath: careerPathsJson(name: {eq: "Desktop Support"}) {
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
