import React from 'react';
import styles from './styles.module.scss';

import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';

const ForYouTestimonials = props => {
  return (
    <div className={ styles.container }>
      <Carousel>
        <QuoteCard
          title=""
          quote="I’ve used Lynda and Pluralsight, along with several others and none have come close to the standard that ITProTV has set when it comes to IT learning. Many times, I have found that I’ve learned more from watching ITProTV than I have from my IT classes at school."
          attribution="Nathan Davis"
        />
        <QuoteCard
          title=""
          quote="As a premium member, I had an online meeting with a career coach who guided me about which course path I should take. For each course, there are a lot of labs where we can practice with real devices, and also an exam questions simulator. If you like it, go on, the money is totally worth it."
          attribution="Jordi Perez"
        />
        <QuoteCard
          title=""
          quote="This site has helped me with two certifications and also as the supplemental material for my grad school classes. Give it a try, you won’t be disappointed."
          attribution="Jeff Patterson"
        />
        <QuoteCard
          title=""
          quote="ITProTV is an affordable training option but you don’t have to sacrifice quality of training to use them. They cover a wide variety of topics and the conversational nature of the sessions is easy to follow."
          attribution="Ryan Davis"
        />
        <QuoteCard
          title=""
          quote="ITProTV is well suited to providing more knowledge and skills to users in order for them to pass exams and gain experience with various technology through the use of the virtual lab environment. The site is very convenient, as I can save time by not having to create my own virtual environment"
          attribution="Alexander John"
        />
        <QuoteCard
          title=""
          quote="I failed my first in-person exam at a testing center. I subscribed to ITProTV for learning and had the retaken the same test, my score dramatically went up. Other providers of IT learning materials are dry and lack the labs/study guides for exam prep that I have found on ITProTV."
          attribution="George Schneider"
        />
        <QuoteCard />
      </Carousel>
    </div>
  );
};


export default ForYouTestimonials;
