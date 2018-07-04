import React from 'react';

import Hx from'Elements/Hx';
import { Episode } from 'Elements/Flags';
import styles from './styles.module.scss';


const episodes = [
  {
    title: 'Windows Operating System Fundamentals',
    linkName: '2018 Update: 98-349',
    url: '/courses/microsoft-technical/mta-windows-operating-system-fundamentals-98349-update-2018/'
  },
  {
    title: 'IT Fundamentals',
    linkName: 'FC0-U51',
    url: '/courses/comptia/fundamentals/'
  },
  {
    title: 'MTA - Security Fundamentals',
    linkName: '2017 Update: 98-367',
    url: '/courses/microsoft-technical/mta-security-fundamentals-98367-2017/'
  },
  {
    title: 'CyberPatriot',
    linkName: 'National Youth Cyber Education Program',
    url: '/courses/security-skills/cyberpatriot/'
  },
];

const FreeCourses = (props) =>
  <section className={ styles.capsule }>
    <div className={ styles.row }>
      <div className={ styles.intro }>
        <Hx color={ styles.headingColor } className={ styles.title } size="2">Try These Courses for Free</Hx>
      </div>
    </div>
    <div className={ styles.row }>
      {
        episodes.map((epi, i) => <Episode key={ i } title={ epi.title } linkName={ epi.linkName } url={ epi.url  } />)
      }
    </div>
  </section>
  ;


export default FreeCourses;
