import React from 'react';
import PropTypes from 'prop-types';
import Hx from 'Elements/Hx';
import courseStyles from './courseLibrary.module.scss';
import styles from './search.module.scss';
import { CoursesHero as Hero } from 'Components/Hero';
import { Course, Episode } from 'Elements/Flags'

const courses = [
  {
    title: 'CCENT',
    description: 'Cisco Certified Entry Network Technician  - 100-105',
  },
  {
    title: 'CCENT (Updated 2018)',
    description: 'Cisco Certified Entry Network Technician  - 100-105',
  },
  {
    title: 'Accelerated CCENT',
    description: 'Cisco Certified Entry Network Technician  - 100-105',
  },
  {
    title: 'Accelerated CCENT',
    description: 'Cisco Certified Entry Network Technician  - 100-105',
  }
];

const episodes = [
  {
    title: 'Getting Started with ITProTV',
    linkName: 'Introduction to ITProTV - Resources'
  },
  {
    title: 'Windows Operating System Fundamentals',
    linkName: '2018 Update: 98-349'
  },
  {
    title: 'IT Fundamentals',
    linkName: 'FC0-U51'
  }
];

export default function Search(props) {
  return (
    <main className={ styles.search }>
      <section className={ styles.Hero }>
        <Hero />
      </section>
      <section className={ styles.Results }>
        <div className={ styles.ResultsContainer}>
          <Hx color={styles.offBlack} size="4">
            Courses
          </Hx>
          <ul className={ styles.ResultsList }>
            {courses.map(course => (
              <Course
                title={course.title}
                description={course.description}
              />
            ))}
          </ul>
          <Hx color={styles.offBlack}  size="4">
            Episodes
            <ul className={ styles.ResultsList }>
              {episodes.map(episode => (
                <Episode
                  title={episode.title}
                  linkName={episode.linkName}
                />
              ))}
            </ul>
          </Hx>
        </div>
      </section>
    </main>
  );
}

Search.propTypes = {
};
