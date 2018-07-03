import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { ForYouHero as Hero } from 'Components/Hero';
import { ForYouSummary as Summary } from 'Components/Summary';
import { ForYouVideo as LearnMore } from 'Components/Videos';
import { ForTeams, VendorList } from 'Components/Shoutout'
import Enhancements from 'Components/Enhancements';
import { ForYouTestimonials as Testimonials } from 'Components/Testimonials';
import { ForYou as Plan } from 'Components/Plans';
import styles from './forYou.module.scss';


const ForYou = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => {
  return (
    <Fragment>
      <Head location={ location }/>
      <main className={ styles['for-you'] }>
        <section className={ styles.Hero }>
          <Hero />
        </section>

        <section className={ styles.Summary }>
          <Summary />
        </section>

        <section className={ styles['Learn-More'] }>
          <LearnMore videoImg={ data.videoImg }/>
        </section>

        <section className={ styles.Vendors }>
          <VendorList />
        </section>

        <section className={ styles.Enhancements }>
          <Enhancements />
        </section>

        <section className={ styles.Testimonials }>
          <Testimonials />
        </section>

        <section className={ styles.Plan }>
          <Plan />
        </section>

        <section className={ styles['For-Teams'] }>
          <ForTeams />
        </section>
      </main>
    </Fragment>
  );
}


export default ForYou;


export const query = graphql`
  query ForYou {
    videoImg: imageSharp(id: { regex: "/forYou_video@1x/"}) {
      sizes(maxWidth: 1050) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
