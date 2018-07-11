import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Head from 'Components/Head';
import { ITResourcesHero as Hero } from 'Components/Hero';
import ITResources from 'Components/ITResources';
import styles from './itResources.module.scss';

const JobResources = ({ data, location }) =>
  <Fragment>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <ITResources itResources={ data.itResources.edges.map((edge) => edge.node) } />
      </section>

    </main>
  </Fragment>


export default JobResources;

export const query = graphql`
  query ITResourcesQuery {
      itResources: allItResourcesJson(sort: {order:ASC, fields: [weight]}) {
        edges {
          node {
            itresourcecategory,
            url,
            resources {
              title,
              description,
              img,
              url
            }
          }
        }
      }
    }
`;
