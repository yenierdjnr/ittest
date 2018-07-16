import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { VirtualLabsHero as Hero } from 'Components/Hero';
import Vlabs from 'Components/Vlabs';
import styles from './courses.module.scss';


const VirtualLabs = ({ data, location}) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.courses }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Vlabs }>
        <Vlabs vLabs={ data.vLabs.edges.map((edge) => edge.node).filter((lab) => lab.labs.length !== 0) } />
      </section>

    </main>
  </Layout>



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
