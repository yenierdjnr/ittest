import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { ITResourcesHero as Hero } from 'Components/Hero';
import ITResourcesContent from 'Components/ITResourcesContent';
import styles from './itResources.module.scss';

const JobResources = ({ data, location }) =>
  <Layout location={ location }>
    <Head location={ location } />
    <main className={ styles.Career }>
      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.Info }>
        {/*<ITResourcesContent itResources={ data.itResources.edges.map((edge) => edge.node) } />*/}
      </section>

    </main>
  </Layout>


export default JobResources;

//
// export const query = graphql`
//   query ITResourcesQuery {
//     itResources: allItResourcesJson {
//       edges {
//         node {
//           itresourcecategory
//           url
//           resources {
//             title
//             description
//             img
//             url
//           }
//         }
//       }
//     }
//   }
// `;
