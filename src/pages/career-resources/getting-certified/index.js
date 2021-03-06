import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { GettingCertifiedHero as Hero } from 'Components/Hero';
import GettingCertified from 'Components/GettingCertified';
import styles from './gettingCertified.module.scss';

const gettingCertifiedPage = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <GettingCertified getCertified={ data.getCertified.edges.map((edge) => edge.node) } />
      </section>

    </main>
  </Layout>


export default gettingCertifiedPage;

export const query = graphql`
  query GettingCertifiedQuery {
      getCertified: allGetCertifiedJson(sort: {order:ASC, fields: [weight]}) {
        edges {
          node {
            certcategory,
            url,
            resources {
              title,
              description,
              url
            }
          }
        }
      }
    }
`;
