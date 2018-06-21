import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { VirtualLabsHero as Hero } from 'Components/Hero';
import Vlabs from 'Components/Vlabs';
import styles from './courses.module.scss';


const VirtualLabs = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.courses }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.Info }>
          <Vlabs vLabs={ data.vLabs.edges.map(edge => edge.node).filter(lab => lab.labs.length !== 0) } />
        </section>

      </main>
    </Fragment>
  );
}


export default VirtualLabs;

export const query = graphql`
  query VlabsQuery {
      vLabs: allVLabsJson(sort: {order:ASC, fields: [weight]}) {
        edges {
          node {
            vlabcategory,
            url,
            labs {
              name
            }
          }
        }
      }
    }
`;
