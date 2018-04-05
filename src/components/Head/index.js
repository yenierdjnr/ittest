import React, { Component } from 'react';
import Helmet from 'react-helmet';


const metaData = {
  '/': {
    page: 'home',
    path: '/',
    title: 'IT Training Courses Online, Video Computer Courses | ITPro.TV',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: 'https://itpro.tv/'
  },
  '/courses/': {
    page: 'courses',
    path: '/courses/',
    title: 'IT Certification Training Courses - Computer Training Videos Online',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Build your skills and get certified. Engaging videos. Expert trainers. Start FREE now!',
    canonical: 'https://itpro.tv/courses/'
  },
  '/live/': {
    page: 'onAir',
    path: '/live/',
    title: 'Live Streaming I.T. training in security, networking and more online',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: 'https://itpro.tv/live/'
  },
  '/plans/': {
    page: 'pricing',
    path: '/plans/',
    title: 'Plans and Pricing | Online I.T. training at a great value',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: 'https://itpro.tv/plans/'
  },
  '/for-teams/': {
    page: 'forTeams',
    path: '/for-teams/',
    title: 'Corporate IT Training, IT Training for Business | ITPro.TV',
    description: 'Corporate membership for IT training. Video IT training for businesses.  Easy to understand IT Certification courses online. Engaging videos with expert trainers. Free business demo.',
    canonical: 'https://itpro.tv/for-teams/'
  },
  '/for-you/': {
    page: 'forYou',
    path: '/for-you/',
    title: 'Learn IT online today | ITPro.TV',
    description: 'Learn IT and get IT certifications. Easy to understand IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: 'https://itpro.tv/for-you/'
  },
  '/career-resources/': {
    page: 'careerResources',
    path: '/career-resources/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/'
  },
  '/career-resources/it-resources/': {
    page: 'itResources',
    path: '/it-resources/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/it-resources/'
  },
  '/career-resources/job-resources/': {
    page: 'jobResources',
    path: '/job-resources/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/job-resources/'
  },
  '/career-resources/career-paths/': {
    page: 'careerPaths',
    path: '/career-paths/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/'
  },
  '/career-resources/career-paths/cloud-technology/': {
    page: 'cloudTechnology',
    path: '/cloud-technology/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/cloud-technology/'
  },
  '/career-resources/career-paths/cybersecurity/': {
    page: 'cybersecurity',
    path: '/cybersecurity/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/cybersecurity/'
  },
  '/career-resources/career-paths/database-administration/': {
    page: 'databaseAdministration',
    path: '/database-administration/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/database-administration/'
  },
  '/career-resources/career-paths/desktop-support/': {
    page: 'desktopSupport',
    path: '/desktop-support/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/desktop-support/'
  },
  '/career-resources/career-paths/entry-level-it/': {
    page: 'entryLevelIt',
    path: '/entry-level-it/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/entry-level-it/'
  },
  '/career-resources/career-paths/it-management-and-strategy/': {
    page: 'itManagementAndStrategy',
    path: '/it-management-and-strategy/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/it-management-and-strategy/'
  },
  '/career-resources/career-paths/network-technology/': {
    page: 'networkTechnology',
    path: '/network-technology/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/network-technology/'
  },
  '/career-resources/career-paths/software-development/': {
    page: 'softwareDevelopment',
    path: '/software-development/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/software-development/'
  },
  '/career-resources/career-paths/systems-administration/': {
    page: 'systemsAdministration',
    path: '/systems-administration/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/systems-administration/'
  },
  '/career-resources/career-paths/virtualization-technology/': {
    page: 'virtualizationTechnology',
    path: '/virtualization-technology/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: 'https://itpro.tv/career-resources/career-paths/virtualization-technology/'
  }
};

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    const { title, description, canonical } = metaData[location.pathname];

    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>{ title }</title>

        <meta name="title" content={ title } />
        <meta name="description" content={ description } />


        {/*<!-- Open Graph Tags Start -->*/}
        <meta property="og:title" content={ title } />
        <meta property="og:site_name" content="ITPro TV" />
        <meta property="og:description" content={ description } />
        <meta property="og:type" content="article" />
        <meta property="og:image" url="https://itprotv-image-bucket.s3.amazonaws.com/site/2015/ITProTV-Open-Graph-Image.jpg" />
        {/*<!---->*/}
        {/*<!---->*/}
        {/*<!-- Open Graph Tags End -->*/}
        {/*<!-- Twitter Tags Start -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={ title } />
        <meta property="twitter:url" content="" />
        <meta property="twitter:description" content={ description } />
        <meta property="twitter:image" url="https://itprotv-image-bucket.s3.amazonaws.com/site/2015/ITProTV-Open-Graph-Image.jpg" />
        {/*<!-- Twitter Tags End -->*/}


        <link rel="stylesheet" type="text/css" href="https://use.typekit.net/jic1ywm.css" />
        <link rel="canonical" href={ canonical } />
      </Helmet>
    );
  }
}


export default Head;
