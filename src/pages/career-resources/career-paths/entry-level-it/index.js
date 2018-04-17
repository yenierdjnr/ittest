import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { EntryLevelITHero as Hero } from 'Components/Hero';
import styles from './entryLevelIT.module.scss';
import { EntryLevelITPath as Paths } from 'Components/CareerPaths';

const EntryLevelIT = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>

        <section className={ styles.Hero }>
          <Hero />
        </section>

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
  query CareerPathByCourse($name: String) {
    careerPath: careerPathsJson(name: {eq:$name}) {
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
