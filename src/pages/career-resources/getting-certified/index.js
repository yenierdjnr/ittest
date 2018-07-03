import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { GettingCertifiedHero as Hero } from 'Components/Hero';
import GettingCertified from 'Components/GettingCertified';
import styles from './gettingCertified.module.scss';

const gettingCertifiedPage = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
  <Fragment>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        <GettingCertified getCertified={ data.getCertified.edges.map((edge) => edge.node) } />
      </section>

    </main>
  </Fragment>
  

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
