import React from 'react';

import Hx from 'Elements/Hx';
import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';
import {
  container, title,
  offBlack
} from './styles.module.scss';

const HomeTestimonials = props => {
  return (
    <div className={ container }>
      <Hx className={ title } color={ offBlack } size="2">Join a community of IT Pros sharpening their skills the fun way.</Hx>
      <Carousel>
        <QuoteCard
          title=""
          quote="Overall the training format and tools that they provide makes them immensely helpful and an extremely good value. Add that to the constantly updated and expanding selection of topics they cover makes it a one-stop-shop for anyone wanting to learn the many aspects of the IT Industry."
          attribution="Charles Morgan, CEO and Founder"
        />
        <QuoteCard
          title=""
          quote="I’ve used Lynda and Pluralsight, along with several others and none have come close to the standard that ITProTV has set when it comes to IT learning. Many times, I have found that I’ve learned more from watching ITProTV than I have from my IT classes at school."
          attribution="Nathan Davis"
        />

        <QuoteCard
          title=""
          quote="There is an excellent variety of courses available. Completion of coursework has improved knowledge and understanding of the tasks my staff perform each day, and I couldn’t be happier."
          attribution="Jim Ford, VP of Information Technology"
        />
        <QuoteCard
          title=""
          quote="As a premium member, I had an online meeting with a career coach who guided me about which course path I should take. For each course, there are a lot of labs where we can practice with real devices, and also an exam questions simulator. If you like it, go on, the money is totally worth it."
          attribution="Jordi Perez"
        />
        <QuoteCard
          title=""
          quote="We are using this program to train the IT staff. This provides us with the opportunity to keep our staff informed and broaden our understanding of new concepts."
          attribution="Jim Barber, Manager of Information Systems"
        />
        <QuoteCard
          title=""
          quote="This site has helped me with two certifications and also as the supplemental material for my grad school classes. Give it a try, you won’t be disappointed."
          attribution="Jeff Patterson"
        />
      </Carousel>
    </div>
  );
};


export default HomeTestimonials;
