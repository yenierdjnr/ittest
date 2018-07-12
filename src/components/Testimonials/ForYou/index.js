import React from 'react';

import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';
import {
  capsule, content,
} from './styles.module.scss';


const ForYouTestimonials = () =>
  <div className={ capsule }>
    <div className={ content }>
      <Carousel>
        <QuoteCard
          title="ITProTV sets the standard"
          quote="I’ve used Lynda and Pluralsight, along with several others and none have come close to the standard that ITProTV has set when it comes to IT learning."
          attribution="Nathan Davis, Technology Helpdesk Analyst"
        />
        <QuoteCard
          title="ITProTV is totally worth it"
          quote="For each course, there are a lot of labs where we can practice with real devices, and also an exam questions simulator. If you like it, go on, the money is totally worth it."
          attribution="Jordi Perez, Networking Professional"
        />
        <QuoteCard
          title="You won’t be disappointed"
          quote="This site has helped me with two certifications and also as the supplemental material for my grad school classes. Give it a try, you won’t be disappointed."
          attribution="Jeff Patterson, IT Professional"
        />
        <QuoteCard
          title="A wide variety of  training"
          quote="ITProTV is an affordable training option but you don’t have to sacrifice quality of training to use them. They cover a wide variety of topics and the conversational nature of the sessions is easy to follow."
          attribution="Ryan Davis, IT Infrastructure Manager"
        />
        <QuoteCard
          title="Experience through labs"
          quote="ITProTV is well suited to providing more knowledge and skills to users in order for them to pass exams and gain experience with various technology through the use of the virtual lab environment."
          attribution="Alexander John, IT Systems Engineer"
        />
        <QuoteCard
          title="Labs and exam prep provided"
          quote="Other providers of IT learning materials are dry and lack the labs/study guides for exam prep that I have found on ITProTV."
          attribution="George Schneider, Intake Technician"
        />
      </Carousel>
    </div>
  </div>
  ;


export default ForYouTestimonials;
