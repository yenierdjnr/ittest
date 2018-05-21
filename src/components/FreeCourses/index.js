import React from 'react';

import Hx from'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { Episode } from 'Elements/Flags';
import styles from './styles.module.scss';


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
  },
  {
    title: 'Security Fundamentals (2017)',
    linkName: '98-349'
  },
  {
    title: 'Windows Operating System Fundamentals',
    linkName: '98-349'
  },
  {
    title: 'CyberPatriot',
    linkName: 'National Youth Cyber Education Program'
  },
];

const FreeCourses = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.intro }>
        <Hx color={ styles.headingColor } className={ styles.title } size="2">Try These Episodes for Free!</Hx>
        <Para size="2" color={ styles.darkGrey } className={ styles.summary }>Don't see what you need? We add new course content every day. Join for free to see what's coming next.</Para>
        <TextLink>sample videos</TextLink>
      </div>
      <ul className={ styles.flags }>
        {
          episodes.map((epi, i) => {
            return <Episode key={ i } title={ epi.title } linkName={ epi.linkName } />
          })
        }
      </ul>
    </section>
  );
};


export default FreeCourses;
