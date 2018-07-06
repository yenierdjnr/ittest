import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { OnAir as Hero } from 'Components/Hero';
import ChannelGuide from 'Components/ChannelGuide';
import styles from './onAir.module.scss';


const OnAir = ({ data, location }) =>
  <Fragment>
    <Head location={ location }/>
    <main className={ styles.onAir }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles['Channel-Guide'] }>
        <ChannelGuide videoImage={ data.videoImg }/>
      </section>
    </main>
  </Fragment>



export default OnAir;


export const query = graphql`
  query OnAir {
    videoImg: imageSharp(id: { regex: "/onAir_video@1x/"}) {
      sizes(maxWidth: 1050) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
