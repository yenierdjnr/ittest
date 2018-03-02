import React, { Fragment } from 'react';

import styles from './homePage.module.scss';
import Hero from 'Components/Hero';
import Card from 'Components/Card';
import { IconArrowRight } from 'Elements/Icons';
import { Courses, Labs, Exams } from 'Components/Engagements';
import Stats from 'Components/Stats';
import { HomeVideo } from 'Components/Videos';
import Testimonials from 'Components/Testimonials';
import VendorList from 'Components/Vendors/List';
import Plans from 'Components/Plans';
import Pamphlet from 'Components/Pamphlet';


const blueDark = '#0094CB';
const greenDark = '#469E24';
const orangePrimary = '#F6621C';

const HomePage = props => {
  return (
    <main className={ styles.home }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.For }>
        <a href="/for-teams/" className={ styles['card-left'] }>
          <Card className={ styles['card'] } btmBarColor={ greenDark }>
            <span className={ styles['for-teams'] }>For Teams</span>
            <IconArrowRight fill={ greenDark } />
            <h2 className={ styles['head-one'] }>Learning Your Team Will Actually Use</h2>
            <p>Empower your team with the IT skills<br/>they need.</p>
          </Card>
        </a>
        <a href="/for-you/" className={ styles['card-right'] }>
          <Card className={ styles['card'] } btmBarColor={ blueDark }>
            <span className={ styles['for-you'] }>For You</span>
            <IconArrowRight fill={ blueDark } />
            <h2 className={ styles['head-one'] }>Training to Accelerate Your Career</h2>
            <p>Get the skills you need from an expansive course library.</p>
          </Card>
        </a>
      </section>

      <section className={ styles.Engagements }>
        <Courses className={ styles.courses } />
        <Labs className={ styles.labs } />
        <Exams className={ styles.exams } />
      </section>

      <section className={ styles.Stats }>
        <Stats />
      </section>

      <section className={ styles.Video }>
        <HomeVideo />
      </section>

      <section className={ styles.Testimonials }>
        <Testimonials />
      </section>

      <section className={ styles.Vendors }>
        <VendorList />
      </section>

      <section className={ styles.Plans }>
        <Plans />
      </section>

      <section className={ styles.Pamphlet }>
        <Pamphlet />
      </section>
    </main>
  );
}


export default HomePage;
