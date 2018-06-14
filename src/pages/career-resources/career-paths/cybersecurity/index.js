import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { CybersecurityPath as Paths } from 'Components/CareerPaths';

const Cybersecurity = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>

        <section>
          <Paths
              recommendedCourses={data.careerPath.recommended.courses}
              supportingCourses={data.careerPath.supporting.courses}
              additionalCourses={data.careerPath.additional.courses}/>
        </section>

      </main>
    </Fragment>
  );
}

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
          level
        }
      }
      supporting {
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
