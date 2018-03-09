import React from 'react';
import styles from './styles.module.scss';

import QuoteCard from 'Components/QuoteCard';


const ForTeamsTestimonials = props => {
  return (
    <div className={ styles.container }>
      <div className={ styles.carousel }>
        <QuoteCard />
      </div>
    </div>
  );
};


export default ForTeamsTestimonials;
