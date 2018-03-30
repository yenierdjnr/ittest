import React from 'react';

import styles from './onAir.module.scss';
import { OnAir as Hero } from 'Components/Hero';
import ChannelGuide from 'Components/ChannelGuide';


const OnAir = ({ data }) => {
  return (
    <main className={ styles.onAir }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles['Channel-Guide'] }>
        <ChannelGuide videoImage={ data.videoImg }/>
      </section>
    </main>
  );
}


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
