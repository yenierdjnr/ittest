import React from 'react';
import styles from './styles.module.scss';

import QuoteCard from 'Components/QuoteCard';


const HomeTestimonials = props => {
  return (
    <div className={ styles.container }>
      <span className={ styles.title }>Join a community of IT professionals sharpening their skills everyday.</span>
      <div className={ styles.carousel }>
        <QuoteCard />
      </div>
    </div>
  );
};


export default HomeTestimonials;
