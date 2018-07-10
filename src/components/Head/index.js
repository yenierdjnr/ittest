import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

const notFoundMetaData = {
    page: '404',
    path: '/404',
    title: '404 - Page Not Found',
    description: '',
    canonical: `${process.env.SELF_URL}/404`
};

const metaData = {
  '/': {
    page: 'home',
    path: '/',
    title: 'IT Training Courses Online, Video Computer Courses | ITProTV',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: `${process.env.SELF_URL}`
  },
  '/courses/': {
    page: 'courses',
    path: '/courses/',
    title: 'IT Certification Training Courses - Computer Training Videos Online',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Build your skills and get certified. Engaging videos. Expert trainers. Start FREE now!',
    canonical: `${process.env.SELF_URL}/courses/`
  },
  '/live/': {
    page: 'onAir',
    path: '/live/',
    title: 'Live Streaming I.T. training in security, networking and more online',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: `${process.env.SELF_URL}/live/`
  },
  '/plans/': {
    page: 'pricing',
    path: '/plans/',
    title: 'Plans and Pricing | Online I.T. training at a great value',
    description: 'Easy to understand IT Training &amp; IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: `${process.env.SELF_URL}/plans/`
  },
  '/for-teams/': {
    page: 'forTeams',
    path: '/for-teams/',
    title: 'Corporate IT Training, IT Training for Business | ITProTV',
    description: 'Corporate membership for IT training. Video IT training for businesses. Easy to understand IT Certification courses online. Engaging videos with expert trainers. Free business demo.',
    canonical: `${process.env.SELF_URL}/for-teams/`
  },
  '/for-you/': {
    page: 'forYou',
    path: '/for-you/',
    title: 'Learn IT online today | ITProTV',
    description: 'Learn IT and get IT certifications. Easy to understand IT Certification courses online. Grow your tech skills. Engaging videos with expert trainers. Start FREE now!',
    canonical: `${process.env.SELF_URL}/for-you/`
  },
  '/accessibility/': {
    page: 'accessibility',
    path: '/accessibility/',
    title: 'Accessibility | ITProTV makes usability easy',
    description: '',
    canonical: `${process.env.SELF_URL}/accessibility/`
  },
  '/thankyou-demo/': {
    page: 'thankyouDemo',
    path: '/thankyou-demo/',
    title: 'Thank You | ITPro.TV',
    description: '',
    canonical: `${process.env.SELF_URL}/thankyou-demo/`
  },
  '/eula/': {
    page: 'eula',
    path: '/eula/',
    title: 'EULA | ITProTV',
    description: '',
    canonical: `${process.env.SELF_URL}/eula/`
  },
  '/privacy/': {
    page: 'privacyPolicy',
    path: '/privacy/',
    title: 'Privacy | Protecting your privacy on ITProTV',
    description: '',
    canonical: `${process.env.SELF_URL}/privacy/`
  },
  '/about/': {
    page: 'about',
    path: '/about/',
    title: 'IT training company in Gainesville, Florida | ITProTV',
    description: 'See the ITProTV studios, learn the story of the company, see clients ITProTV serves and learn the core values that drive the team.',
    canonical: `${process.env.SELF_URL}/about/`
  },
  '/team/': {
    page: 'team',
    path: '/team/',
    title: 'The team behind ITProTV | ITProTV',
    description: 'Meet the ITProTV team. Learn more about the leadership of the company and how ITProTV is growing to meet the global demand for IT training. Read about the background of the leaders.',
    canonical: `${process.env.SELF_URL}/team/`
  },
  '/contact/': {
    page: 'contact',
    path: '/contact/',
    title: 'Support for ITProTV | ITProTV',
    description: 'Get support for your ITProTV account. See ITProTV office locations. ITProTV phone number and email address. Maps to offices.',
    canonical: `${process.env.SELF_URL}/contact/`
  },
  '/government/': {
    page: 'government',
    path: '/government/',
    title: 'Government | IT Training for Agency Personnel',
    description: 'Online IT training for government officials looking to comply with the latest DoD-Approved 8140/8570 baseline certifications',
    canonical: `${process.env.SELF_URL}/government/`
  },
  '/practice-tests/': {
    page: 'practice-tests',
    path: '/practice-tests/',
    title: 'Practice tests for IT certifications | ITProTV',
    description: 'Access Kaplan IT Training (formerly Transcender) practice tests from ITProTV for Microsoft, CompTIA, EC-Council, PMI and more.',
    canonical: `${process.env.SELF_URL}/practice-tests/`
  },
  '/edutainers/': {
    page: 'edutainers',
    path: '/edutainers/',
    title: 'ITProTV Subject Matter Experts - Edutainers | ITProTV',
    description: 'Meet the ITProTV subject matter experts. Learn more about the edutainers who blend education and entertainment to make learning fun. ITProTV instructor backgrounds.',
    canonical: `${process.env.SELF_URL}/edutainers/`
  },
  '/career-resources/': {
    page: 'careerResources',
    path: '/career-resources/',
    title: 'IT Jobs & IT Career Path Resources | ITProTV | IT Courses',
    description: 'Explore IT jobs and IT certifications for various information technology careers and learn about advancing your career in technology with IT training by ITProTV.',
    canonical: `${process.env.SELF_URL}/career-resources/`
  },
  '/career-resources/getting-certified/': {
    page: 'gettingCertified',
    path: '/getting-certified/',
    title: 'IT Training & Certification Courses for IT Jobs | ITProTV',
    description: 'Learn IT on-demand with IT training & certification courses from ITProTV. Become a member today, we’ll be your learning partner as you grow your IT career.',
    canonical: `${process.env.SELF_URL}/career-resources/getting-certified/`
  },
  '/career-resources/job-resources/': {
    page: 'jobResources',
    path: '/job-resources/',
    title: 'IT Career & IT Certification Resources | ITProTV',
    description: 'Interested in a career in IT? Get info on IT jobs, salary guides, and career advice from the experts at ITProTV.',
    canonical: `${process.env.SELF_URL}/career-resources/job-resources/`
  },
  '/career-resources/career-paths/': {
    page: 'careerPaths',
    path: '/career-paths/',
    title: 'IT Jobs & Careers in Technology | ITProTV | IT Courses',
    description: 'From entry-level IT jobs, to advanced IT careers, explore IT certifications from CompTIA, Microsoft, Cisco & more and find your IT career path.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/`
  },
  '/career-resources/career-paths/cloud-technology/': {
    page: 'cloudTechnology',
    path: '/cloud-technology/',
    title: 'Cloud Technology Jobs & IT Certification Courses | ITProTV',
    description: 'As a cloud technology pro, there is no better way to get job skills training than earning certifications. Advance your career – learn IT online with ITProTV.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/cloud-technology/`
  },
  '/career-resources/career-paths/cybersecurity/': {
    page: 'cybersecurity',
    path: '/cybersecurity/',
    title: 'Cybersecurity Jobs & IT Certifications | ITProTV | IT Courses',
    description: 'There is always a high demand for cybersecurity IT pros. From entry-level jobs to IT management careers, start learning, get certified, and get the job.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/cybersecurity/`
  },
  '/career-resources/career-paths/database-administration/': {
    page: 'databaseAdministration',
    path: '/database-administration/',
    title: 'Database Administration Jobs & IT Courses | ITProTV',
    description: 'Earn a certificate in database administration to work in a variety of database-related IT jobs like managing, developing & analyzing database architecture.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/database-administration/`
  },
  '/career-resources/career-paths/desktop-support/': {
    page: 'desktopSupport',
    path: '/desktop-support/',
    title: 'Desktop Support Jobs & IT Certifications | ITProTV',
    description: 'Every industry needs a good desktop support professional; Windows Server specialist and network engineers are always in high demand on the IT job market.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/desktop-support/`
  },
  '/career-resources/career-paths/entry-level-it/': {
    page: 'entryLevelIt',
    path: '/entry-level-it/',
    title: 'Entry Level IT Jobs & IT Certifications | ITProTV',
    description: 'Curious about getting started in IT? Need more information about IT certifications & careers? Learn about tech jobs and start your IT career today.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/entry-level-it/`
  },
  '/career-resources/career-paths/it-management-and-strategy/': {
    page: 'itManagementAndStrategy',
    path: '/it-management-and-strategy/',
    title: 'IT Management & Strategy Jobs & IT Courses | ITProTV',
    description: 'Take the next step in your IT career working in IT Project Management  - ITProTV has the certification courses to help get you started.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/it-management-and-strategy/`
  },
  '/career-resources/career-paths/network-technology/': {
    page: 'networkTechnology',
    path: '/network-technology/',
    title: 'Network Technology Jobs & Certifications| ITProTV',
    description: 'Looking for a job in network security? Become an IT Pro with the right certifications to advance your career.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/network-technology/`
  },
  '/career-resources/career-paths/software-development/': {
    page: 'softwareDevelopment',
    path: '/software-development/',
    title: 'Software Development Jobs & IT Certifications | ITProTV',
    description: 'Get your Dev career started in web, software or app development, and become a certified programming guru with job training courses from ITProTV.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/software-development/`
  },
  '/career-resources/career-paths/systems-administration/': {
    page: 'systemsAdministration',
    path: '/systems-administration/',
    title: 'System Administration Jobs & IT Courses | ITProTV',
    description: 'There is a high demand for great system administrators on the IT job market, learn IT and earn certifications and get on track to becoming a system admin today.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/systems-administration/`
  },
  '/career-resources/career-paths/virtualization-technology/': {
    page: 'virtualizationTechnology',
    path: '/virtualization-technology/',
    title: 'Virtualization Technology Jobs & IT Courses | ITProTV',
    description: 'Get started with a career in virtualization technology, explore IT certifications from Microsoft, VMWare, CompTIA & more and learn with ITProTV.',
    canonical: `${process.env.SELF_URL}/career-resources/career-paths/virtualization-technology/`
  },
  '/vlabs/': {
    page: 'vlabs',
    path: '/vlabs/',
    title: 'Virtual labs, practice Labs for IT training | ITProTV',
    description: 'Access virtual labs for hands-on learning of IT. Cloned virtual machine environments to learn IT risk-free.',
    canonical: `${process.env.SELF_URL}/vlabs/`
  },
  '/404': notFoundMetaData
};

const getRenderMetaData = (locationPathName) => {
    if (metaData[locationPathName]) {
      return metaData[locationPathName];
    } else {
      return notFoundMetaData;
    }
}

class Head extends Component {
  constructor(props) {
    super(props);
  }


  renderAnimationScripts = () => {
    return [
      <script key="1" type="text/javascript" src={ withPrefix('animations/ITP_Content_1.hyperesources/itpcontent1_hype_generated_script.js') } />,
      <script key="1" type="text/javascript" src={ withPrefix('animations/ITP_Exams_1.hyperesources/itpexams1_hype_generated_script.js') } />,
      <script key="1" type="text/javascript" src={ withPrefix('animations/ITP_Servers_1.hyperesources/itpservers1_hype_generated_script.js') } />
    ];
  };

  render() {
    const { location } = this.props;
    const { title, description, canonical } = getRenderMetaData(location.pathname);
    const test = withPrefix('animations/ITP_Content_1.hyperesources/itpcontent1_hype_generated_script.js');

    return (
      <Helmet>
        <meta charSet="utf-8" lang="en" />
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

        <link rel="stylesheet" type="text/css" href="https://use.typekit.net/lju1geg.css" />
        <link rel="canonical" href={ canonical } />

        {location.pathname === '/'
          ? this.renderAnimationScripts()
          : null
        }

      </Helmet>
    );
  }
}


export default Head;
