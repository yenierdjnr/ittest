import React from 'react';

import Hx from 'Elements/Hx';
import QuoteCard from 'Components/QuoteCard';
import {
  container, title,
  offBlack, carousel
} from './styles.module.scss';


const HomeTestimonials = props => {
  return (
    <div className={ container }>
      <Hx className={ title } color={ offBlack } size="2">Join a community of IT Pros sharpening their skills the fun way.</Hx>
      <div className={ carousel }>
        <QuoteCard />
      </div>
    </div>
  );
};


export default HomeTestimonials;
