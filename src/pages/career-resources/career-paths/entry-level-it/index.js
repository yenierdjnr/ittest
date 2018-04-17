import React, { Fragment } from 'react';

import Head from 'Components/Head';

import styles from './entryLevelIT.module.scss';
import { EntryLevelITPath as Paths } from 'Components/CareerPaths';

const EntryLevelIT = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
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

export default EntryLevelIT;

export const pageQuery = graphql`
  query CareerPathByCourse($url: String) {
    careerPath: careerPathsJson(url: {eq:$url}) {
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
