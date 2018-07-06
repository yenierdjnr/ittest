import React from 'react';

import Hx from 'Elements/Hx';
import { CoursesHero as Hero } from 'Components/Hero';
import { Course, Episode } from 'Elements/Flags'
import styles from './search.module.scss';


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

const Search = (props) => {
  const { location } = props;

  return (
    <main className={ styles.container }>

      <section className={ styles.Hero }>
        <Hero location={ location }/>
      </section>

      <section className={ styles.Results }>
        <div className={ styles['results-container'] }>
          <Hx className={ styles['course-title'] }color={ styles.offBlack } size="4">Courses</Hx>
          <ul className={ styles.ResultsList }>
            {courses.map((course, i) =>
              <Course
                key={ i }
                title={ course.title }
                description={ course.description }
              />
            )}
          </ul>
          <Hx className={ styles['episode-title'] } color={ styles.offBlack } size="4">Episodes</Hx>
          <ul className={ styles.ResultsList }>
            {episodes.map((episode, i) =>
              <Episode
                key={ i }
                className="search"
                title={ episode.title }
                linkName={ episode.linkName }
              />
            )}
          </ul>
        </div>
      </section>

    </main>
  );
}


export default Search;
