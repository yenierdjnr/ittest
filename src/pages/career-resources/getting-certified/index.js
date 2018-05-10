import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { GettingCertifiedHero as Hero } from 'Components/Hero';
import GettingCertifiedMenu from 'Components/GettingCertifiedMenu';
import styles from './gettingCertified.module.scss';

const gettingCertified = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location } />
      <main className={ styles.Career }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.Info }>
          <GettingCertifiedMenu getCertified={ data.getCertified.edges.map(edge => edge.node) } />
        </section>

      </main>
    </Fragment>
  );
}

export default gettingCertified;

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
