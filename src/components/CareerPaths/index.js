import React from 'react';

import { CareerPath } from 'Elements/Flags';
import styles from './styles.module.scss';


const paths = [
  {
    title: 'Entry Level IT',
    linkName: 'Explore the foundation and recommended courses & certs to launch a career in IT.'
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

const CareerPaths = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.flags }>
        {
          paths.map((path, i) => {
            return <CareerPath key={ i } title={ path.title } linkName={ path.linkName } />
          })
        }
      </ul>
    </section>
  );
};


export default CareerPaths;
