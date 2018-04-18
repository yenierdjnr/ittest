import React from 'react';

import { CareerPath } from 'Elements/Flags';
import styles from './styles.module.scss';


const paths = [
  {
    title: 'Entry Level IT',
    description: 'Explore the foundation and recommended courses & certs to launch a career in IT.',
    link: '/career-resources/career-paths/entry-level-it/'
  },
  {
    title: 'Desktop Support',
    description: 'A key part of every IT team is the desktop support team. Understand the basics here.',
    link: '/career-resources/career-paths/desktop-support/'
  },
  {
    title: 'Systems Administration',
    description: 'Get started or advance as a system admin with these key courses that lead to certs.',
    link: '/career-resources/career-paths/systems-administration/'
  },
  {
    title: 'Network Technology',
    description: 'Explore the vendors and paths that you can choose from as a network pro.',
    link: '/career-resources/career-paths/network-technology/'
  },
  {
    title: 'Cloud Technology',
    description: 'Choose from vendor-specific or neutral paths to being a cloud pro.',
    link: '/career-resources/career-paths/cloud-technology/'
  },
  {
    title: 'Virtualization Technology',
    description: "Whether a dev, admin or engineer, you'll be an asset to any organization with virtualization skills.",
    link: '/career-resources/career-paths/virtualization-technology/'
  },
  {
    title: 'Cybersecurity',
    description: "Explore this high-demand career path that's vital in every industry every where.",
    link: '/career-resources/career-paths/cybersecurity/'
  },
  {
    title: 'Database Administration',
    description: 'DBAs are in high-demand. Get the foundation for any database admin career with this path.',
    link: '/career-resources/career-paths/database-administration/'
  },
  {
    title: 'IT Management Strategy',
    description: "Explore the specialized training for project management in IT that's in high demand.",
    link: '/career-resources/career-paths/it-management-and-strategy/'
  },
  {
    title: 'Development',
    description: 'Explore HTML, CSS, Python, JavaScript, Docker & more.',
    link: '/career-resources/career-paths/software-development/'
  }
];

const CareerPathsMain = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.flags }>
        {
          paths.map((path, i) => {
            return <CareerPath key={ i } title={ path.title } description={ path.description } link={ path.link } />
          })
        }
      </ul>
    </section>
  );
};


export default CareerPathsMain;
