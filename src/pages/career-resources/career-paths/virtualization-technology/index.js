import React, { Fragment } from 'react';

import Head from 'Components/Head';
import styles from '../careerPaths.module.scss';
import { VirtualizationTechnologyPath as Path } from 'Components/CareerPaths';

const VirtualizationTechnology = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
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
  

export default VirtualizationTechnology;

export const pageQuery = graphql`
  query VirtualizationTechnologyQuery {
    careerPath: careerPathsJson(name: {eq: "Virtualization Technology"}) {
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
