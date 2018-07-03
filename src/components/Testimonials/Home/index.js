import React from 'react';

import Hx from 'Elements/Hx';
import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';
import {
  capsule, content,
  offBlack, title
} from './styles.module.scss';


const HomeTestimonials = (props) => 
  <div className={ capsule }>
    <div className={ content }>
      <Hx className={ title } color={ offBlack } size="2">Join a Community of IT Pros Sharpening Their Skills the Fun Way</Hx>
      <Carousel>
        <QuoteCard
          title="Training that pays for itself"
          quote="My team is moving faster than ever before. If I tallied the consulting expense of the changes we have made on our own, ITProTV probably would have paid for itself in the first 30 days."
          attribution="Dana Morrison, IT Director"
        />
        <QuoteCard
          title="ITProTV sets the standard"
          quote="I’ve used Lynda and Pluralsight, along with several others and none have come close to the standard that ITProTV has set when it comes to IT learning."
          attribution="Nathan Davis, Technology Helpdesk Analyst"
        />
        <QuoteCard
          title="Improved knowledge"
          quote="There is an excellent variety of courses available. Completion of coursework has improved knowledge and understanding of the tasks my staff perform each day, and I couldn’t be happier."
          attribution="Jim Ford, VP of Information Technology"
        />
        <QuoteCard
          title="ITProTV is totally worth it"
          quote="For each course, there are a lot of labs where we can practice with real devices, and also an exam questions simulator. If you like it, go on, the money is totally worth it."
          attribution="Jordi Perez, Networking Professional"
        />
        <QuoteCard
          title="Learn anywhere, anytime"
          quote="This is great for people to use at home or on the road. If you can’t afford to send someone to a Windows 2016 server class for a week, this is a very good test prep."
          attribution="Jim Barber, Manager of Information Systems"
        />
        <QuoteCard
          title="You won’t be disappointed"
          quote="This site has helped me with two certifications and also as the supplemental material for my grad school classes. Give it a try, you won’t be disappointed."
          attribution="Jeff Patterson, IT Professional"
        />
      </Carousel>
    </div>
  </div>
  ;


export default HomeTestimonials;
