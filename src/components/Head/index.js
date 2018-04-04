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
  '/thankyou-demo/': {
    page: 'thankyouDemo',
    path: '/thankyou-demo/',
    title: 'Thank You | ITPro.TV',
    description: '',
    canonical: 'https://itpro.tv/thankyou-demo/'
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
